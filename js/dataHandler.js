var tempJson;
var assault_rifle, pistol, rifle, shotgun, submachine_gun, sniper, item;

/**
 * @param {string} object - Object to scan in
 * @param {string} key - Key to scan for
 * @param {string} value - Value to scan for
 */
function filterObject(object, key, value) {
    return Object.keys(object)
        .filter((k) => object[k][key] === value)
        .map((k) => object[k]);
}

/**
 * @param {string} elementID - Element ID of the select element
 * @param {string} value - Digital value of the option
 * @param {string} text - Visual text of the option
 */
function pushOption(elementID, value, text) {
    $(`#${elementID}`).append(
        $("<option />", {
            value: value,
            text: text,
        })
    );
}

$.ajax({
    method: "get",
    url: window.location.origin + "/data/data.json",

    success: function (res) {
        tempJson = res;

        pistol = filterObject(tempJson, "type", "pistol");
        assault_rifle = filterObject(
            tempJson["weapons"],
            "type",
            "assault_rifle"
        );
        pistol = filterObject(tempJson["weapons"], "type", "pistol");
        rifle = filterObject(tempJson["weapons"], "type", "rifle");
        shotgun = filterObject(tempJson["weapons"], "type", "shotgun");
        submachine_gun = filterObject(
            tempJson["weapons"],
            "type",
            "submachine_gun"
        );
        sniper = filterObject(tempJson["weapons"], "type", "sniper");
        item = filterObject(tempJson["items"], "type", "item");

        tempJson = {
            assault_rifle: assault_rifle,
            pistol: pistol,
            rifle: rifle,
            shotgun: shotgun,
            submachine_gun: submachine_gun,
            sniper: sniper,
            item: item,
            attachments: {},
        };

        for (key in res["attachments"]) {
            var temp = res["attachments"][key];
            tempJson["attachments"][temp.name] = {
                name: temp.name,
                longname: temp.longname,
                type: temp.type,
                gamepass: temp.gamepass,
            };
        }

        $("select").on("change", function () {
            if (this.id.toString().endsWith("x0")) {
                var thisid = this.id.toString().slice(0, -1);
                var thisidx = this.id.toString().split("")[1];

                for (var i = 2; i < 7; i++) {
                    $(`#w${thisidx}x${i}`).hide();
                }

                if (this.value != "item" && this.value != "none") {
                    $(`#${thisid}2`).show();
                    $(`#${thisid}3`).show();
                    $(`#${thisid}4`).show();
                    $(`#${thisid}5`).show();
                    $(`#${thisid}6`).show();
                }

                $(`#${thisid}1`).empty();
                for (key in tempJson[this.value]) {
                    var temp = tempJson[this.value][key];

                    pushOption(
                        `${thisid}1`,
                        temp.name,
                        temp.gamepass
                            ? temp.longname + " (Gamepass)"
                            : temp.longname
                    );
                }

                $(`#${thisid}1`).change();
            } else if (this.id.toString().endsWith("x1")) {
                var thisid = this.id.toString().slice(0, -1);

                for (var i = 2; i < 7; i++) $(`#${thisid}${i}`).empty();

                pushOption(`${thisid}2`, "none", "None");
                pushOption(`${thisid}3`, "none", "None");
                pushOption(`${thisid}4`, "none", "None");
                pushOption(`${thisid}5`, "none", "None");
                pushOption(`${thisid}6`, "none", "None");

                if (
                    $(`#${thisid}0`).val() != "item" &&
                    $(`#${thisid}0`).val() != "none"
                ) {
                    for (key in tempJson["attachments"]) {
                        var temp = tempJson["attachments"][key];
                        if (temp.type == "sight")
                            pushOption(`${thisid}2`, temp.name, temp.longname);

                        if (temp.type == "grip")
                            pushOption(`${thisid}3`, temp.name, temp.longname);

                        if (temp.type == "barrel")
                            pushOption(`${thisid}4`, temp.name, temp.longname);

                        if (temp.type == "stock")
                            pushOption(`${thisid}5`, temp.name, temp.longname);

                        if (temp.type == "accessory")
                            pushOption(`${thisid}6`, temp.name, temp.longname);
                    }

                    $(`#${thisid}2`).show();
                    $(`#${thisid}3`).show();
                    $(`#${thisid}4`).show();
                    $(`#${thisid}5`).show();
                    $(`#${thisid}6`).show();
                }
            }
        });
    },
});
