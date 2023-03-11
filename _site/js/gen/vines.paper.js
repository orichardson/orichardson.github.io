var PARAMS = {
	min_width: 0.4,
	min_life: 20,
	life_range: 35,
	base_curl_friction: 0.95,
	curl_explode_width_asymptote: -0.1,
	curl_breeze_factor: 3,
	saturation_hl: 30,
	hue_velocity: 2,
	brightness_hl: 400,
	select_curves: false,
	selected_frames: 40,
	min_partition: 0.2,
	speed_multiplier_average: 0.95,
	speed_multiplier_range: 0.3,
	simplify_tolerence: 2
};

var num_points_created = 0; // for bookkeeping

Point.prototype.perp = function() {
	return new Point(-this.y, this.x);
}

function VineData(position, direction, curl, color, width, gp) {
	this.direction = direction;
	this.curl = curl;
	this.color = color;
	this.width = width;
	this.group = gp;

	this.life = PARAMS.min_life + Math.floor(PARAMS.life_range*Math.random());

	this.curve = new Path();
	this.curve.strokeColor = color;
	this.curve.strokeWidth = width;
	this.curve.add(position-direction.normalize(width/2));
	this.curve.add(position);
	this.curve.pivot = gp.pivot;
	this.curve.fullySelected = PARAMS.select_curves;
	this.curve.strokeCap = 'butt';
	this.group.addChild(this.curve);

	this.children = [];
	this.alive = true;

	this.tick = function() {
		this.life -= 1
		if (this.alive) {
			this.color.hue += PARAMS.hue_velocity*2*(Math.random()-0.5)
			this.color.brightness += (1-this.color.brightness)/PARAMS.brightness_hl;
			this.color.saturation += (1-this.color.saturation)/PARAMS.saturation_hl;

			var b = PARAMS.base_curl_friction;

			this.curl *= (b + (1-b)/(this.width - PARAMS.curl_explode_width_asymptote));
			this.curl += (Math.random()-0.5)*(1+PARAMS.curl_breeze_factor/this.width)
			this.direction.angle += this.curl;
			//this.direction *= 0.99;
			var newpos = this.curve.lastSegment.point + this.direction;

			if(!view.bounds.contains(newpos)) {
				//this.alive = false;
				var vec = view.bounds.center-newpos
				var dir = this.direction.clone()
				if(newpos.x > view.bounds.width || newpos.x < 0)
					dir.x /= -10;
				else
					dir.y /= -10;

				this.direction.angle = dir.angle
				//this.width -= 1;
				this.curl = 0;
				newpos = this.curve.lastSegment.point + this.direction + vec.normalize(dir.length)

				//this.curve.removeSegments(Math.max(this.curve.segments.length-2, 0));
				this.curve.add(newpos);
				//this.curve.simplify(PARAMS.simplify_tolerence);
				//this.curve.smooth('continuous', 1);
			} else
				this.curve.add(newpos);


			num_points_created++;
			this.curve.strokeColor = this.color

			if(this.life <= 0 && this.children.length == 0)
				this.split();
			if(this.life <= 0)
				this.alive = false;

		} else if (PARAMS.select_curves) {
			var frames = PARAMS.selected_frames;
			if (this.life <= -frames && this.life > -(frames+1))
				this.curve.fullySelected = false;
		}

		if (this.children.length > 0) {
			for(var i = 0; i < this.children.length; i++) {
				this.children[i].tick();
			}
		}

	}

	this.split = function() {
		if (this.children.length == 0) {
			//this.alive = false;
			var curve = this.curve;
			setTimeout(function() {
				curve.smooth();
				curve.simplify(PARAMS.simplify_tolerence);
			},1);

			if(this.width >= PARAMS.min_width) {
				var dir = this.direction.clone();
				var pos = this.curve.lastSegment.point;
				var horiz = dir.perp() * Math.sign(this.curl);
				var dirp = dir + horiz/5;
				var dirm = dir - horiz/5;
				horiz = horiz.normalize(this.width/2);

				var edge = PARAMS.min_partition;
				var partition = edge + Math.random()*(1-2*edge);

				var rans = PARAMS.speed_multiplier_range;
				var mins = PARAMS.speed_multiplier_average - rans/2;

				var v1 = new VineData(
					pos + horiz*(1-partition),
					dirp*(mins + Math.random()*rans),
					this.curl, this.color.clone(),
					this.width*partition, this.group);
				var v2 = new VineData(
					pos - horiz*(partition),
					dirm*(mins + Math.random()*rans),
					-this.curl,	this.color.clone(),
					this.width*(1-partition), this.group)

				this.children.push(v1, v2);

			}
			//alive.remove(this);
		}
	}

	this.move = function(delta) {
		this.agg(function(v) {
			v.curve.translate(delta);
		});
	}

	this.agg = function(fun) {
		var total = fun(this);
		for(var i = 0; i < this.children.length; i++)
			total += this.children[i].agg(fun);
		return total;
	}
}

function startVine(hue, width, anchor, dir) {
	return new VineData(anchor, dir, 0, new Color({hue:hue, saturation:0, brightness:0.1}), width,
		new Group({pivot:anchor}));
}

var vines = [
	startVine(320, 50, view.bounds.topRight, new Point(-1.4, 1.4))
//	,startVine(180, 300, view.bounds.bottomCenter, new Point(0, -2.2))
];


var twist = false;

function onFrame(event) {
	for(var i = 0; i < vines.length; i++)
		vines[i].tick();

	var f = function(v) {return v.curve.segments.length};

//	console.log(vines[0].agg(f) + vines[1].agg(f));
//	console.log(num_points_created);

	if(twist)	vines[0].group.rotate(1);
}

function onMouseDown(event) {
	twist = true;
}

function onMouseUp(event) {twist = false;}

function onResize(event) {
	vines[0].group.translate(view.bounds.topRight-vines[0].curve.pivot);	//vines[1].group.translate(view.bounds.bottomCenter-vines[1].curve.pivot);
}
