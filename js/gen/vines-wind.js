
var DEFAULT_PARAMS = {
	min_width: 0.5,
	// min_life: 20,
	// min_life: 10,
	min_life: 15,
	// life_range: 35,
	life_range: 35,
	// life_range: 0,
	// life_range: 25,
	base_curl_friction: 0.95,
	// curl_explode_width_asymptote: -0.0,
	curl_explode_width_asymptote: 0.85,
	// curl_explode_width_asymptote: 0.5,
	// curl_explode_width_asymptote: 0,
	curl_breeze_factor: 3,
	saturation_hl: 100,
	// hue_velocity: 4,
	hue_velocity: -0.3,
	hue_velocity_variation: 6,
	// hue_accel: 1,
	// hue_friction:0.9,
	// brightness_hl: 300,
	brightness_hl: 200,
	// brightness_hl: 100,
	// select_curves: true,
	select_curves: false,
	selected_frames: 10,
	// min_partition: 0.15,
	min_partition: 0.1,
	extra_split_width: 0.2,
	// extra_split_width: 0.0,
	speed_multiplier_average: 0.92, /* on split, change in speed */
	// speed_multiplier_average: 0.95, /* on split, change in speed */
	// speed_multiplier_range: 0.3,
	speed_multiplier_range: 0.1,
	// simplify_tolerence: 2,
	simplify_tolerence: 4,
	// wedge_angle: Math.PI/4,
	wedge_angle: Math.PI/6,
	// max_parallel_width: 3,
	max_parallel_width: 20,
	// max_parallel_width: 50,
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
window.n_ticks_per_frame = 1;

function Vine(position, direction, width, curl, color, gp, params, parent, 
		life_multiplier=1, hue_velo=0) {
	/// movement
	this.rotMom = 0; // rotational momentum
	this.rotJerk = 0;

	// vine position, etc.
	this.direction = direction;
	this.curl = curl;
	this.color = color;
	this.width = width;
	this.group = gp || new paper.Group({pivot:position, transformContent:false});
	this.params = params || Object.assign({}, DEFAULT_PARAMS);

	this.life = this.params.min_life + Math.floor(this.params.life_range*Math.random() * life_multiplier);
	// this.life = Math.ceil((this.params.min_life + this.params.life_range*Math.random() * life_multiplier)
	// 	* this.width/200);

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

	
	let cw = width*0.6 + 5
	this.cursor = new paper.Path.Circle(position, cw);
	// this.cursor.strokeColor =  'white';
	// this.cursor.fillColor = new paper.Color(0.3, 0.1, 0.4, 1);
	// this.cursor.strokeColor = 'rgb('+getComputedStyle(document.body).getPropertyValue('--bg-color')+")";
	// this.cursor.fillColor = 'rgb('+getComputedStyle(document.body).getPropertyValue('--fg-color')+")";
	this.cursor.strokeColor = 'rgba('+getComputedStyle(document.body).getPropertyValue('--fg-color')+",0.6)";
	this.cursor.fillColor = 'rgba('+getComputedStyle(document.body).getPropertyValue('--bg-color')+",0.95)";
	this.cursor.strokeWidth = 2;
	cw *= Math.PI/5;
	this.cursor.dashArray = [cw,cw];
	this.group.addChild(this.cursor);

	this.children = [];
	this.parent = parent;
	this.alive = true;
	this.has_living_descendents = true; // for optimization

	this.hue_velocity = hue_velo;

	this.tick = function() {
		if(!this.has_living_descendents)
			return false;


		if(this.curve.segments.length <= 2) {
			// this.cursor.strokeColor = 'black';
			// this.cursor.fillColor = new paper.Color(0.2, 0.3, 0.4, 0.5);
		} else {
			//this.cursor.bringToFront();
		}
		this.life -= 1
		if (this.alive) {
			// this.hue_velocity += this.params.hue_accel*(Math.random()-0.5);
			// this.hue_velocity *= this.params.hue_friction;
			// this.color.hue += this.hue_velocity;

			this.color.hue += this.params.hue_velocity + this.params.hue_velocity_variation*(Math.random()-0.5);
				// *(this.width/(this.width-1));
			this.color.brightness += (Math.random()-0.2)*(1-this.color.brightness)/this.params.brightness_hl;
			// this.color.saturation += (1-this.color.saturation)/this.params.saturation_hl;
			this.color.saturation += (Math.random()-0.2)*(1-this.color.saturation)/this.params.saturation_hl;
			// this.color.saturation += (0.01+this.color.saturation)*(0.01+this.color.saturation)*
				// (1-this.color.saturation)/2;

			let b = this.params.base_curl_friction;

			// this.curl *= (b + (1-b)/(this.width - this.params.curl_explode_width_asymptote));
			this.curl *= (b + (1-b)*this.params.curl_explode_width_asymptote/(this.width));
			// this.curl += (Math.random()-0.5)*(1+this.params.curl_breeze_factor/this.width)
			this.curl += (Math.random()-0.5)*(20/(20+this.width)) * 
				(1 + this.params.curl_breeze_factor/this.width);
			// this.curl = Math.sign(this.curl) * Math.min(Math.abs(this.curl), 7+10*Math.random());
			// if(Math.abs(this.curl) > 20 && Math.random() > 0.8) {
			// 	this.curl = Math.abs(this.curl) *  Math.log2(this.curl)
			// }
			this.direction.angle += this.curl;
			//this.direction *= 0.99;
			let newpos = this.curve.lastSegment.point.add(this.direction);

			if(!paper.view.bounds.contains(newpos)) {
				//this.alive = false;
				/*
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
				*/
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
			let frames = this.params.selected_frames;
			if (this.life <= -frames && this.life > -(frames+1))
				this.curve.fullySelected = false;
		}

		if (this.children.length > 0) {
			let childers = this.children;

			let any_alive = false;
			for(let i = 0; i < childers.length; i++) {
				if(childers[i].tick()) {
					// if(!any_alive){
					any_alive = true;
					if(this.width < this.params.max_parallel_width)
						return true;
					// }
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

				var edge = this.params.min_partition;
				var partition = edge + Math.random()*(1-2*edge);

				// var sinamt = Math.sin(this.params.wedge_angle);
				// var dirscaled = dir.multiply(Math.cos(this.params.wedge_angle));
				// var horiz = dir.perp().multiply(Math.sign(this.curl) * sinamt);
				var horiz = dir.perp().multiply(Math.sign(this.curl));
				var angle1 = this.params.wedge_angle * (1-partition)
				var angle2 = -this.params.wedge_angle * (partition)
				// var horiz = dir.perp().multiply();
				
				// var dirp = dirscaled.add(horiz);
				// var dirm = dirscaled.subtract(horiz);
				var dirp = dir.multiply(Math.cos(angle1)).add(horiz.multiply(Math.sin(angle1)));
				var dirm = dir.multiply(Math.cos(angle2)).add(horiz.multiply(Math.sin(angle2)));
				
				var horiz = horiz.normalize(this.width/2);

				
				var rans = this.params.speed_multiplier_range;
				var mins = this.params.speed_multiplier_average - rans/2;

				var subgp = new Group({pivot:pos, transformContent:false});
				this.group.addChild(subgp);

				var totalw = (1+Math.random()*Math.min(
						this.params.extra_split_width,
						partition, (1-partition))) * this.width;

				var extra_curl = (this.width/(1+this.width))*Math.sign(this.curl);

				var v1 = new Vine(
					pos.add(horiz.multiply(1-partition)),
					dirp.multiply(mins + Math.random()*rans),
					partition*totalw,
					// this.curl*partition,
					// 0,
					// Math.abs(this.curl)*partition+1,
					(this.curl + extra_curl) * partition,
					// -Math.abs(curl)/2,
					this.color.clone(),
					subgp, this.params, this, 1, this.hue_velocity);
				var v2 = new Vine(
					pos.subtract(horiz.multiply(partition)),
					dirm.multiply(mins + Math.random()*rans),
					totalw*(1-partition),
					-(this.curl + extra_curl)*(1-partition),
					// 0,
					// -Math.abs(this.curl)/2,
					// -Math.abs(curl)*(1-partition)-1,
					this.color.clone(),
					subgp, this.params, this, 1, this.hue_velocity)

				if(Math.random() < 0.5)
					this.children.push(v1, v2);
				else
					this.children.push(v2, v1);

				this.children[0].tick();

			}
			//alive.remove(this);
		}
	}

	this.blow = function() {
		// if (Math.random() > 0.5)
		// 	return;

		//this.group.rotation = this.group.rotation % Math.PI;
		this.group.rotate( this.rotMom/(1+this.width) );
		this.rotMom += this.rotJerk
		this.rotMom *= 0.97;
		this.rotMom += (-this.group.rotation)/(200);

		this.rotJerk += (Math.random()-0.5) * 0.02
		// this.rotJerk += (Math.random()-0.5) * 0.2 / (1 + this.width);
		this.rotJerk *= 0.94;

		// if(this.parent) {
		// 	var bleed = 0.5
		// 	this.parent.rotJerk = (this.rotJerk * (bleed/2) + this.parent.rotJerk*(1-bleed/2))
		// }

		for (var i = 0; i < this.children.length; i++) {
			this.children[i].blow()
			this.rotJerk += this.children[i].rotJerk
		}
		this.rotJerk /= (1 + this.children.length);
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
	var v = new Vine(anchor, dir, width, 0, 
		new paper.Color({hue:hue, saturation:0, brightness:0.1}));
	v.life += 30;
	vines.push(v);
}

$(function() {
	paper.setup('background');
	paper.install(window);

	// startVine(hue, width, anchor, direction)
	console.log("started at ", paper.view.bounds.topRight);
	console.log("bottom center = ", paper.view.bounds.bottomCenter);
	
	// usual one
	// startVine(320, 60, paper.view.bounds.topRight, new paper.Point(-1.6, 1.6));
	startVine(350, 60, paper.view.bounds.topRight, new paper.Point(-1.6, 1.6));
	// startVine(320, 100, paper.view.bounds.topRight, new paper.Point(-1.6, 1.6));
	// startVine(180, 300, paper.view.bounds.bottomCenter, new paper.Point(0, -2.2));
	// startVine(320, 60, paper.view.bounds.center, new paper.Point(-2.6, 2.6));

	function onFrame(event) {
		if(event.count % 2 == 0)
			return;

		for(var i = 0; i < vines.length; i++) {
//			for(var k = 0; k < 4; k++)
			for(var k = 0; k < window.n_ticks_per_frame; k++)
				vines[i].tick();
			vines[i].blow();
		}


//		var f = function(v) {return v.curve.segments.length};
//		console.log(vines[0].agg(f) + vines[1].agg(f));
//		console.log(num_points_created);
	}

	function onResize(event) {
		// vines[0].group.translate(paper.view.bounds.topRight.subtract(vines[0].group.pivot));
		//vines[1].group.translate(paper.view.bounds.bottomCenter.subtract(vines[1].group.pivot));
		
		vines[0].group.translate(paper.view.bounds.topRight.subtract(vines[0].group.pivot));
		vines[0].group.pivot = paper.view.bounds.topRight;
	}

	paper.view.onFrame = onFrame;
	paper.view.onResize = onResize;

});

/* module.exports = {
	vines: vines,
	Vine: Vine,
	startVine, startVine
}; */
