const app = new Vue({
    el: "#app",
    data: {
        changes: [
            {
                date: `January 8, 2022`,
                articles: [
                    `Fixed bug where weapon without attachments would end in + or +++++`,
                    `Added "Generate from input", which will generate a weapon from the inputted text *needs the input to have a set generated from townss.ml or using shortcut names`,
                ],
            },
            {
                date: `January 7, 2022`,
                articles: [
                    `Initial commit`,
                    `Ability to generate set`,
                    `Almost forgot to add pistols`,
                    `Added gamepass markers`,
                ],
            },
        ],
    },
});
