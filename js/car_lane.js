document.body.style.backgroundColor = 'black';
var container = document.getElementsByClassName("main_container")[0];
var container_height = container.clientHeight;
// console.log("height>>", container_height);
var container_width = container.clientWidth;
// console.log("width>>", container_width);
// var background_images =

// var fs = require('fs');
// var data = fs.readFileSync('score.json', 'utf8');
// var mydata = JSON.parse(score.json);
// alert(mydata[0].name);
// alert(mydata[0].age);
// Storage.setItem('score', '200');
var myStorage = window.localStorage;
// myStorage.setItem('high_score', '0');

var high_score = Number(myStorage.getItem('high_score'));

function car_lane_game(parentElement, container_height, container_width) {
    this.parentElement = parentElement;
    this.height = container_height;
    // console.log("height>>", this.height);
    this.width = container_width;
    this.background_images = document.getElementsByClassName("background_container")[0].getElementsByTagName("img");;
    // console.log(this.background_images[0]);
    this.image_height = this.background_images[0].clientHeight;
    // console.log("image height>>", this.image_height);
    this.total_score = 0;
    this.event_listener = 0;

    this.total_kills = 0;
    // this.other_cars_parent = document.getElementsByClassName("other_car_box")[0];

    this.car_speed = 8;
    this.image_index = 0;
    this.car_position = 1;
    this.time_counter = 0;
    this.cars = [];
    this.other_car_position = []; //top margin
    this.game = 0;

    this.number_of_cars = 0;
    this.main_car = 0;
    this.main_car_height = 0;
    this.main_car_width = 0;
    this.main_car_left = 0;
    this.main_car_top = 0;

    this.other_cars_height = [];
    this.other_cars_width = [];
    this.other_cars_left = [];
    this.car_flag = 0;
    // this.other_cars_top = [];


    var that = this;
    this.init = function() {

        this.image_index = -(this.image_height - this.height);
        this.background_images[0].style.marginTop = this.image_index + "px";
        // console.log(this.background_images[0].style.marginTop);
        // console.log(that.background_images[0]);
        this.starting();
        // background_container


    }

    this.starting = function() {
        var start_box_parent = document.getElementsByClassName("main_container")[0];
        var start_box = document.createElement('div');

        start_box.style.height = (this.height / 3) + "px";
        // console.log(this.height);

        start_box.style.width = (this.width / 2) + "px";

        start_box.style.top = ((this.height / 2) / 2) + "px";
        start_box.style.paddingTop = 5 + "%";
        // console.log("top>>", start_box.style.paddingTop);
        start_box.style.left = ((this.width / 2) / 2) + "px";
        // start_box.style.paddingLeft = 4 + "px";
        start_box.style.paddingBottom = 8 + "%";
        // console.log("left>>", start_box.style.paddingLeft)
        start_box.innerHTML = "<b> Car Lane Game<br>Press to Start</b>";
        start_box.classList.add("start_box");
        var start_image = document.createElement('img');
        // start_image.src = "https://www.animatedimages.org/data/media/426/animated-button-image-0329.gif";
        //start_image.src = "https://www.animatedimages.org/data/media/426/animated-button-image-0575.gif";
        start_image.src = "https://www.animatedimages.org/data/media/426/animated-button-image-0538.gif";
        start_box.appendChild(start_image);
        start_box_parent.appendChild(start_box);
        start_image.addEventListener("click", function() {
            document.getElementsByClassName("start_box")[0].remove();
            that.start_playing_game();
        })


    }

    this.start_playing_game = function() {
        var main_car_parent = document.getElementsByClassName("main_container")[0];
        var main_car_box = document.createElement('div');
        this.main_car_height = (this.height / 6.2);
        main_car_box.style.height = this.main_car_height + "px";
        this.main_car_width = (this.width / 7);
        main_car_box.style.width = this.main_car_width + "px";
        this.main_car_top = (this.height - (this.height / 4.5));
        main_car_box.style.top = this.main_car_top + "px";

        this.main_car_left = (this.width / 2.4);
        main_car_box.style.left = this.main_car_left + "px";

        main_car_box.classList.add("main_car_box");
        var main_car_image = document.createElement('img');
        main_car_image.src = "./images/Police.png";

        main_car_box.appendChild(main_car_image);
        main_car_parent.appendChild(main_car_box);
        // that.car_position = 1;
        this.main_car = main_car_box;






        window.addEventListener("keydown", this.event_listener = function(event) {
            // console.log("starting car_position", that.car_position);
            if (event.keyCode == '39') {
                // right arrow key
                if (that.car_position == 1) {
                    that.main_car_left = (that.width / 1.3846);
                    main_car_box.style.left = that.main_car_left + "px";
                    that.car_position = 2;
                }
                if (that.car_position == 0) {
                    that.main_car_left = (that.width / 2.4);
                    main_car_box.style.left = that.main_car_left + "px";
                    that.car_position = 1;
                }

                if (that.car_position == 2) {
                    that.main_car_left = (that.width / 1.3846);
                    main_car_box.style.left = that.main_car_left + "px";
                    that.car_position = 2;
                }
                // console.log(that.car_position);

                // console.log("right>>", (that.width / 1.5574));
            }
            if (event.keyCode == '37') {
                // 
                //left arrow key
                if (that.car_position == 1) {
                    that.main_car_left = (that.width / 13.50357);
                    main_car_box.style.left = that.main_car_left + "px";
                    that.car_position = 0;
                }
                if (that.car_position == 2) {
                    that.main_car_left = (that.width / 2.4);
                    main_car_box.style.left = that.main_car_left + "px";
                    that.car_position = 1;
                }
                if (that.car_position == 0) {
                    that.main_car_left = (that.width / 13.50357);
                    main_car_box.style.left = that.main_car_left + "px";
                    that.car_position = 0;
                }

            }

            // console.log("ending car_position", that.car_position);
        }, true);

        // clearInterval(that.game);
        this.game = setInterval(this.play_game, 50);


    }

    this.play_game = function() {
        that.time_counter = that.time_counter + 50;

        document.getElementById("score").innerHTML = "Score:" + that.total_score;
        document.getElementById("time").innerHTML = Math.floor(that.time_counter / 1000) + "sec";
        document.getElementById("speed").innerHTML = that.car_speed + "KPH";

        document.getElementById("car_kills").innerHTML = "High Score:" + high_score;
        that.background_movement();
        if (that.time_counter % 3000 == 0) { //|| that.time_counter % 11000 == 0
            that.car_flag++;
            that.first_col_cars();
        } else { // || that.time_counter % 17000 == 0
            if (that.time_counter % 2000 == 0) {
                that.third_col_cars();
            }
        }
        if (that.time_counter % 5000 == 0) { //|| that.time_counter % 13000 == 0
            that.car_flag++;
            that.second_col_cars();
        }
        that.car_flag == 0;
        // var number_of_cars = that.other_car_position.length;
        // console.log(number_of_cars);
        if (that.number_of_cars != 0) {
            for (var i = 0; i < that.number_of_cars; i++) {
                //*******collision detection********* */
                if (that.main_car_left < that.other_cars_left[i] + that.other_cars_width[i] &&
                    that.main_car_left + that.main_car_width > that.other_cars_left[i] &&
                    that.main_car_top < that.other_car_position[i] + that.other_cars_height[i] &&
                    that.main_car_top + that.main_car_height > that.other_car_position[i]) {
                    window.removeEventListener("keydown", that.event_listener, true);

                    for (var i = 0; i < that.number_of_cars; i++) {
                        document.getElementsByClassName("other_car_box")[0].remove();
                    }

                    clearInterval(that.game);
                    that.restart_game();
                    // that.ending();
                }
                if (that.other_car_position[i] > that.height) {
                    that.other_car_position.splice(i, 1);
                    // console.log(that.cars[i]);
                    document.getElementsByClassName("other_car_box")[0].remove();
                    that.cars.splice(i, 1);
                    that.other_cars_height.splice(i, 1);
                    that.other_cars_width.splice(i, 1);
                    that.other_cars_left.splice(i, 1);
                    that.total_score++;

                    that.number_of_cars--;

                }
                // console.log(that.number_of_cars);

                //collision detection and ending the game

                // console.log("comparing", that.main_car.style.left < that.cars[i].style.left + that.cars[i].style.width);
                var top_margin = that.other_car_position[i];
                // console.log(that.other_car_position[0]);

                that.other_car_position[i] = (top_margin + that.car_speed);
                that.cars[i].style.top = that.other_car_position[i] + "px";
                // console.log(that.cars[0]);
            }
        }



    }

    this.first_col_cars = function() {
        var first_col_car_parent = document.getElementsByClassName("main_container")[0];
        var first_col_car_box = document.createElement('div');
        that.other_cars_height[that.number_of_cars] = (that.height / 5.8);
        first_col_car_box.style.height = that.other_cars_height[that.number_of_cars] + "px";
        that.other_cars_width[that.number_of_cars] = (that.width / 6);
        first_col_car_box.style.width = that.other_cars_width[that.number_of_cars] + "px";
        var starting_position = -40;

        first_col_car_box.style.top = starting_position + "px";

        that.other_cars_left[that.number_of_cars] = (that.width / 13.50357);
        first_col_car_box.style.left = that.other_cars_left[that.number_of_cars] + "px";

        first_col_car_box.classList.add("other_car_box");
        var first_col_car_image = document.createElement('img');
        var car = Math.floor(Math.random() * 4);
        first_col_car_image.src = "./images/car_" + car + ".png";
        // first_col_car_image.style.transform = "rotate(180deg)";
        first_col_car_box.appendChild(first_col_car_image);
        first_col_car_parent.appendChild(first_col_car_box);
        that.cars.push(first_col_car_box);
        that.other_car_position[that.number_of_cars] = (starting_position);
        // console.log("other car position of first car", that.other_car_position);
        // console.log(that.cars);
        that.number_of_cars++;
    }

    this.second_col_cars = function() {
        var second_col_car_parent = document.getElementsByClassName("main_container")[0];
        var second_col_car_box = document.createElement('div');
        that.other_cars_height[that.number_of_cars] = (that.height / 5.8);
        second_col_car_box.style.height = that.other_cars_height[that.number_of_cars] + "px";
        that.other_cars_width[that.number_of_cars] = (that.width / 6);
        second_col_car_box.style.width = that.other_cars_width[that.number_of_cars] + "px";
        var starting_position = -40;
        second_col_car_box.style.top = starting_position + "px";

        that.other_cars_left[that.number_of_cars] = (this.width / 2.6);
        second_col_car_box.style.left = that.other_cars_left[that.number_of_cars] + "px";

        second_col_car_box.classList.add("other_car_box");
        var second_col_car_image = document.createElement('img');
        var car = Math.floor(Math.random() * 4);
        second_col_car_image.src = "./images/car_" + car + ".png";
        // second_col_car_image.style.transform = "rotate(180deg)";
        second_col_car_box.appendChild(second_col_car_image);
        second_col_car_parent.appendChild(second_col_car_box);
        that.cars.push(second_col_car_box);
        that.other_car_position[that.number_of_cars] = (starting_position);
        that.number_of_cars++;
        // console.log("second_col_cars");
    }

    this.third_col_cars = function() {
        var third_col_car_parent = document.getElementsByClassName("main_container")[0];
        var third_col_car_box = document.createElement('div');
        that.other_cars_height[that.number_of_cars] = (that.height / 5.8);
        third_col_car_box.style.height = that.other_cars_height[that.number_of_cars] + "px";
        that.other_cars_width[that.number_of_cars] = (that.width / 6);
        third_col_car_box.style.width = that.other_cars_width[that.number_of_cars] + "px";
        var starting_position = -40;
        third_col_car_box.style.top = starting_position + "px";

        that.other_cars_left[that.number_of_cars] = (this.width / 1.3846);
        third_col_car_box.style.left = that.other_cars_left[that.number_of_cars] + "px";

        third_col_car_box.classList.add("other_car_box");
        var third_col_car_image = document.createElement('img');
        var car = Math.floor(Math.random() * 4);
        third_col_car_image.src = "./images/car_" + car + ".png";
        // third_col_car_image.style.transform = "rotate(180deg)";
        third_col_car_box.appendChild(third_col_car_image);
        third_col_car_parent.appendChild(third_col_car_box);
        that.cars.push(third_col_car_box);
        that.other_car_position[that.number_of_cars] = (starting_position);
        // console.log("third_col_cars");
        that.number_of_cars++;
    }

    this.background_movement = function() {
        if (that.image_index >= -that.car_speed) {
            that.image_index = -(that.image_height - that.height);
            that.car_speed += 2;
        }
        that.image_index += that.car_speed;
        that.background_images[0].style.marginTop = that.image_index + "px";

    }


    this.restart_game = function() {

        document.getElementsByClassName("main_car_box")[0].remove();
        if (high_score < this.total_score) {
            high_score = this.total_score;
            myStorage.setItem('high_score', high_score);
        }


        // window.removeEventListener("click", this.left_event_listener, true);
        // window.removeEventListener("click", this.right_event_listener, true);
        // window.removeEventListener("click", this.fire_event_listener, true);

        this.total_score = 0;

        this.total_kills = 0;

        this.car_speed = 8;
        this.image_index = 0;
        this.car_position = 1;
        this.time_counter = 0;
        this.cars = [];
        this.other_car_position = []; //top margin
        this.game = 0;

        this.number_of_cars = 0;
        this.main_car = 0;
        this.main_car_height = 0;
        this.main_car_width = 0;
        this.main_car_left = 0;
        this.main_car_top = 0;


        this.other_cars_height = [];
        this.other_cars_width = [];
        this.other_cars_left = [];
        that.image_index = -(that.image_height - that.height);
        that.background_images[0].style.marginTop = that.image_index + "px";

        that.start_playing_game();
    }



}

var parentElement = document.getElementsByClassName("main_container");

start_game = new car_lane_game(parentElement, container_height, container_width).init();