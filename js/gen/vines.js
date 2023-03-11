
var DEFAULT_PARAMS = {
	min_width: 0.5,
	min_life: 20,
	life_range: 35,
	base_curl_friction: 0.95,
	curl_explode_width_asymptote: -0.1,
	curl_breeze_factor: 3,
	saturation_hl: 20,
	hue_velocity: 2,
	brightness_hl: 300,
	select_curves: false,
	selected_frames: 10,
	min_partition: 0.2,
	speed_multiplier_average: 0.95,
	speed_multiplier_range: 0.3,
	simplify_tolerence: 2,
	max_parallel_width: 25,
	with: function(obj) {
		var newp = 	Object.assign({}, this);
		for(v in obj) newp[v] = obj[v];
		return newp;
	}
};

var num_points_created = 0; // for bookkeeping

paper.Point.prototype.perp = function() {
	return new paper.Point(-this.y, this.x);
}

function Vine(position, direction, width, curl, color, gp, params, parent) {
	this.direction = direction;
	this.curl = curl;
	this.color = color;
	this.width = width;
	this.group = gp || new paper.Group({pivot:position});
	this.params = params || Object.assign({}, DEFAULT_PARAMS);

	this.life = this.params.min_life + Math.floor(this.params.life_range*Math.random());

	this.curve = new paper.Path();
	this.curve.strokeColor = color;
	this.curve.strokeWidth = width;
	this.curve.add(position.subtract(direction.normalize(width/2))); // add some buffer behind start point.
	this.curve.add(position);
	this.curve.pivot = this.group.pivot.clone();
	this.curve.fullySelected = this.params.select_curves;
	this.curve.strokeCap = 'butt';
	this.group.addChild(this.curve);
	this.curve.sendToBack();


	this.cursor = new paper.Path.Circle(position, width*0.6 + 5);
	this.cursor.strokeColor =  'white';
	this.cursor.fillColor = new paper.Color(0.3, 0.1, 0.4, 1);
	this.cursor.strokeWidth = 2;
	this.group.addChild(this.cursor);

	this.children = [];
	this.parent = parent;
	this.alive = true;
	this.has_living_descendents = true; // for optimization

	this.tick = function() {
		if(!this.has_living_descendents)
			return false;


		if(this.curve.segments.length <= 2) {
			this.cursor.strokeColor = 'black';
			this.cursor.fillColor = new paper.Color(0.2, 0.3, 0.4, 0.5);
		} else {
			//this.cursor.bringToFront();
		}
		this.life -= 1
		if (this.alive) {
			this.color.hue += this.params.hue_velocity*2*(Math.random()-0.5)
			this.color.brightness += (1-this.color.brightness)/this.params.brightness_hl;
			this.color.saturation += (1-this.color.saturation)/this.params.saturation_hl;

			var b = this.params.base_curl_friction;

			this.curl *= (b + (1-b)/(this.width - this.params.curl_explode_width_asymptote));
			this.curl += (Math.random()-0.5)*(1+this.params.curl_breeze_factor/this.width)
			this.direction.angle += this.curl;
			//this.direction *= 0.99;
			var newpos = this.curve.lastSegment.point.add(this.direction);

			if(!paper.view.bounds.contains(newpos)) {
				//this.alive = false;
				var vec = paper.view.bounds.center.subtract(newpos)
				var dir = this.direction.clone()
				if(newpos.x > paper.view.bounds.width || newpos.x < 0)
					dir.x /= -10;
				else
					dir.y /= -10;

				this.direction.angle = dir.angle
				//this.width -= 1;
				this.curl = 0;
				newpos = this.curve.lastSegment.point.add(this.direction).add(vec.normalize(dir.length));

				//this.curve.removeSegments(Math.max(this.curve.segments.length-2, 0));
				this.curve.add(newpos);
				//this.curve.simplify(this.params.simplify_tolerence);
				//this.curve.smooth('continuous', 1);
			} else
				this.curve.add(newpos);

			this.cursor.position = newpos;

			num_points_created++;
			this.curve.strokeColor = this.color

			if(this.life <= 0 && this.children.length == 0)
				this.split();
			if(this.life <= 0) {
				this.alive = false;
				this.cursor.remove();
			}

			return true;
		} else if (this.params.select_curves) {
			var frames = this.params.selected_frames;
			if (this.life <= -frames && this.life > -(frames+1))
				this.curve.fullySelected = false;
		}

		if (this.children.length > 0) {
			var childers = this.children;

			var any_alive = false;
				for(var i = 0; i < childers.length; i++) {
					if(childers[i].tick()) {
						any_alive = true;
						if(this.width < this.params.max_parallel_width)
							return true;
					}
				}
			if(!any_alive)
				this.has_living_descendents = false;
			return any_alive
			//}, 1);
		}
		else return false;
	}

	this.split = function() {
		if (this.children.length == 0) {
			//this.alive = false;
			var curve = this.curve, st = this.params.simplify_tolerence;
			setTimeout(function() {
				curve.simplify(st);
			},1);

			if(this.width >= this.params.min_width) {
				var dir = this.direction.clone();
				var pos = curve.lastSegment.point;
				var horiz = dir.perp().multiply(Math.sign(this.curl));
				var dirp = dir.add(horiz.divide(5));
				var dirm = dir.subtract(horiz.divide(5));
				horiz = horiz.normalize(this.width/2);

				var edge = this.params.min_partition;
				var partition = edge + Math.random()*(1-2*edge);

				var rans = this.params.speed_multiplier_range;
				var mins = this.params.speed_multiplier_average - rans/2;

				var v1 = new Vine(
					pos.add(horiz.multiply(1-partition)),
					dirp.multiply(mins + Math.random()*rans),
					this.width*partition,
					this.curl, this.color.clone(),
					this.group, this.params, this);
				var v2 = new Vine(
					pos.subtract(horiz.multiply(partition)),
					dirm.multiply(mins + Math.random()*rans),
					this.width*(1-partition),
					-this.curl,	this.color.clone(),
					this.group, this.params, this)

				if(Math.random() < 0.5)
					this.children.push(v1, v2);
				else
					this.children.push(v2, v1);

				this.children[0].tick();

			}
			//alive.remove(this);
		}
	}

	this.agg = function(fun) {
		var total = fun(this);
		for(var i = 0; i < this.children.length; i++)
			total += this.children[i].agg(fun);
		return total;
	}

	this.move = function(delta) {
		this.agg(function(v) {
			v.curve.translate(delta);
		});
	}
}

var vines = [];

function startVine(hue, width, anchor, dir) {
	var v = new Vine(anchor, dir, width, 0, new paper.Color({hue:hue, saturation:0, brightness:0.1}));
	vines.push(v);
}

$(function() {
	paper.setup('background');
	paper.install(window);

	startVine(320, 60, paper.view.bounds.topRight, new paper.Point(-1.6, 1.6));
	//startVine(180, 300, paper.view.bounds.bottomCenter, new paper.Point(0, -2.2));

	function onFrame(event) {
		for(var i = 0; i < vines.length; i++)
//			for(var k = 0; k < 4; k++)
				vines[i].tick();

//		var f = function(v) {return v.curve.segments.length};
//		console.log(vines[0].agg(f) + vines[1].agg(f));
//		console.log(num_points_created);
	}

	function onResize(event) {
		vines[0].group.translate(paper.view.bounds.topRight.subtract(vines[0].group.pivot));	//vines[1].group.translate(paper.view.bounds.bottomCenter.subtract(vines[1].group.pivot));
	}

	paper.view.onFrame = onFrame;
	paper.view.onResize = onResize;

});

/* module.exports = {
	vines: vines,
	Vine: Vine,
	startVine, startVine
}; */
