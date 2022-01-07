const defaultWeapon = {
    name: "none",
    type: "none",
    attachments: [],
};

for (var i = 0; i < 6; i++) app.weapons[i] = defaultWeapon;

/**
 * @param {string} ID - Element ID
 * @param {string} value - can be **val** or **txt**
 */
function getSV(ID, value) {
    switch (value) {
        case "val":
            return $(`#${ID} option:selected`).val();

        case "txt":
            return $(`#${ID} option:selected`).text();
    }
}

$("select").on("change", function () {
    for (var i = 1; i < 7; i++) {
        app.weapons[i - 1] = {
            name: getSV(`w${i}x1`, "val"),
            type: getSV(`w${i}x0`, "val"),
            attachments: [],
        };

        for (var ii = 2; ii < 7; ii++) {
            if (getSV(`w${i}x${ii}`, "val") != "none") {
                app.weapons[i - 1]["attachments"].push(
                    getSV(`w${i}x${ii}`, "val")
                );
            }
        }
    }
});

function exorcise(string, space = true) {
    var regex = /.*\++/g;
    var regex2 = /.*\+/g;

    if (regex.test(string)) {
        if (string.replaceAll("+", "") == "undefined") return "";
    } else if (regex2.test(string)) string = `${string.slice(0, -1)}`;

    return string;
}

function blueExorcise(string) {
    var regex = /.*\++/g;

    if (regex.test(string)) {
        if (string.replaceAll("+", "") == "undefined") return "";
    }

    return string;
}

function parse(w1, w2, w3, w4, w5, w6) {
    var command = `!sts `;
    var commandArray = [];
    var _w1, _w2, _w3, _w4, _w5, _w6;

    if (w1.name != "none" || w1.name != undefined) {
        _w1 = `${w1.name}`;

        if (w1["attachments"] != []) {
            _w1 += `+${w1["attachments"].join("+")}`;
        }

        _w1 = exorcise(_w1);
    }

    if (w2.name != "none" || w2.name != undefined) {
        _w2 = `${w2.name}`;

        if (w2["attachments"] != []) {
            _w2 += `+${w2["attachments"].join("+")}`;
        }

        _w2 = exorcise(_w2);
    }

    if (w3.name != "none" || w3.name != undefined) {
        _w3 = `${w3.name}`;

        if (w3["attachments"] != []) {
            _w3 += `+${w3["attachments"].join("+")}`;
        }

        _w3 = exorcise(_w3);
    }

    if (w4.name != "none" || w4.name != undefined) {
        _w4 = `${w4.name}`;

        if (w4["attachments"] != []) {
            _w4 += `+${w4["attachments"].join("+")}`;
        }

        _w4 = exorcise(_w4);
    }

    if (w5.name != "none" || w5.name != undefined) {
        _w5 = `${w5.name}`;

        if (w5["attachments"] != []) {
            _w5 += `+${w5["attachments"].join("+")}`;
        }

        _w5 = exorcise(_w5);
    }

    if (w6.name != "none" || w6.name != undefined) {
        _w6 = `${w6.name}`;

        if (w6["attachments"] != []) {
            _w6 += `+${w6["attachments"].join("+")}`;
        }

        _w6 = exorcise(_w6, false);
    }

    _w1 = blueExorcise(_w1);
    _w2 = blueExorcise(_w2);
    _w3 = blueExorcise(_w3);
    _w4 = blueExorcise(_w4);
    _w5 = blueExorcise(_w5);
    _w6 = blueExorcise(_w6);

    if (!_w1.includes("undefined")) commandArray.push(_w1);
    if (!_w2.includes("undefined")) commandArray.push(_w2);
    if (!_w3.includes("undefined")) commandArray.push(_w3);
    if (!_w4.includes("undefined")) commandArray.push(_w4);
    if (!_w5.includes("undefined")) commandArray.push(_w5);
    if (!_w6.includes("undefined")) commandArray.push(_w6);

    command = `!sts ${commandArray.join(" ")}`.replace(/[ ]{2,}/g, " ");

    if (command.endsWith(" ")) command = command.slice(0, -1);

    if (command.length > 200) {
        alert(
            "Roblox doesn't allow to send messages longer than 200 characters. Please remove attachments or other stuff to make the message shorter than 200 characters."
        );
    }

    return command;
}

$("#gen").on("click", function () {
    $("#commandInput").val(
        parse(
            app.weapons[0],
            app.weapons[1],
            app.weapons[2],
            app.weapons[3],
            app.weapons[4],
            app.weapons[5]
        )
    );
});
