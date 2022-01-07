const app = new Vue({
    el: "#app",
    data: {
        weapons: {
            1: {},
            2: {},
            3: {},
            4: {},
            5: {},
            6: {},
        },
        command: `!sts`,
    },
});

for (var i = 1; i < 7; i++) {
    document.getElementById(
        `w${i}x0`
    ).innerHTML = `<option value="none" selected>None</option>
    <option value="pistol">Pistol</option>
    <option value="assault_rifle">Assault Rifles</option>
    <option value="submachine_gun">Sub Machine Guns</option>
    <option value="shotgun">Shotguns</option>
    <option value="sniper">Sniper Rifles</option>
    <option value="item">Items</option>`;
}

var clipboard = new ClipboardJS(".btn");

for (var i = 1; i < 7; i++) {
    for (var ii = 2; ii < 7; ii++) {
        $(`#w${i}x${ii}`).hide();
    }
}
