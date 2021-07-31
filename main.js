var canvas = new fabric.Canvas("myCanvas");
block_img_width = 70;
block_img_height = 70;
player_x = 200;
player_y = 200;
player_object = "";
function player_update() {
    fabric.Image.fromURL("player.png", function(Img) {
    player_object =Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:player_y,
        left:player_x

    });
    canvas.add(player_object);
    });

}
function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
    block_img_object = Img;
    
    block_img_object.scaleToWidth(block_img_width);
    block_img_object.scaleToHeight(block_img_height);
    block_img_object.set({
        top:player_y,
        left:player_x

    });
    canvas.add(block_img_object);
   });
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPress = e.keyCode;
    console.log(keyPress);
    if (e.shiftKey == true && keyPress == "81") {
        console.log("Block size increased by 10.");
        block_img_width = block_img_width + 10;
        block_img_height = block_img_height + 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }
    if (e.shiftKey == true && keyPress == "77") {
        console.log("Block size decreased by 10.");
        block_img_width = block_img_width - 10;
        block_img_height = block_img_height - 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }
    if (keyPress == '38') {
        up();
        console.log("Player moved up.");
    }
    if (keyPress == '40') {
        down();
        console.log("Player moved down.");
    }
    if (keyPress == '37') {
        left();
        console.log("Player moved left.");
    }
    if (keyPress == '39') {
        right();
        console.log("Player moved right.");
    }
    
    if (keyPress == '87') {
        new_image("wall.jpg");
        console.log("Brick added.");
    }
    if (keyPress == '71') {
        new_image("ground.png");
        console.log("Grass block added.");
    }
    if (keyPress == '76') {
        new_image("light_green.png");
        console.log("Grass added.");
    }
    if (keyPress == '84') {
        new_image("trunk.jpg");
        console.log("Wood added.");
    }
    if (keyPress == '82') {
        new_image("roof.jpg");
        console.log("Nether block added.");
    }
    
    if (keyPress == '89') {
        new_image("yellow_wall.png");
        console.log("Yellow Brick added.");
    }
    if (keyPress == '68') {
        new_image("dark_green.png");
        console.log("Cactus added.");
    }
    if (keyPress == '85') {
        new_image("unique.png");
        console.log("Shiny block added.");
    }
    if (keyPress == '67') {
        new_image("cloud.jpg");
        console.log("Stone added.");
    }
    if (keyPress == '86') {
        new_image("lava.jpg");
        console.log("Lava added.");
    }
    
    if (keyPress == '79') {
        new_image("obsidion.jpg");
        console.log("Obsidion added.");
    }
    
    if (keyPress == '80') {
        new_image("portal.png");
        console.log("Portal added.");
    }

    if (keyPress == '83') {
        new_image("sand.jpg");
        console.log("Sand added.");
    }

    if (keyPress == '69') {
        new_image("ender_portal.png");
        console.log("Ender Portal Block added.");
    }

    if (keyPress == '78') {
        new_image("ender_space.jpg");
        console.log("Ender Portal added.");
    }

    if (keyPress == '77') {
        new_image("enderman.png");
        console.log("Enderman added.");
    }

    if (keyPress == '88') {
        new_image("ender_dragon.png");
        console.log("Ender Dragon added.");
    }

    if (keyPress == '72') {
        new_image("door.jpg");
        console.log("House Door added.");
    }

    if (keyPress == '73') {
        new_image("diamond_sword.jpg");
        console.log("Diamond Sword added.");
    }

    if (keyPress == '66') {
        new_image("bow_arrow.png");
        console.log("Diamond Bow added.");
    }

    if (keyPress == '70') {
        new_image("fire_ball.png");
        console.log("Ender Dragon's Ender Ball added.");
    }

    if (keyPress == '65') {
        new_image("arrow.png");
        console.log("Diamond Arrow added.");
    }

    if (keyPress == '90') {
        new_image("zombie.jpg");
        console.log("Zombie added.");
    }

    if (keyPress == '74') {
        new_image("creeper.png");
        console.log("Creeper added.");
    }

    if (keyPress == '81') {
        new_image("herobrine_attack.jpg");
        console.log("Herobrine's Special Attack added.");
    }

    if (keyPress == '75') {
        new_image("glass.png");
        console.log("Glass added.");
    }
}
function up() {
    if (player_y > 0) {
    player_y = player_y - 10;
    canvas.remove(player_object);
    player_update();
    }
}
function down() {
    if (player_y < 600) {
    player_y = player_y + 10;
    canvas.remove(player_object);
    player_update();
    }
}
function left() {
    if (player_x > 0) {
    player_x = player_x - 10;
    canvas.remove(player_object);
    player_update();
    }
}
function right() {
    if (player_x < 800) {
    player_x = player_x + 10;
    canvas.remove(player_object);
    player_update();
    }
}