({
    name: "Ultrasonic", // Category Name
    description: "Ultrasonic sensor",
    author: "BeeBlock",
    category: "Sensors",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#0f3058", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        "ultrasonic",
        {
            xml: `
                <block type="ultrasonic_lower_than">
                    <value name="distance">
                        <shadow type="math_number">
                            <field name="NUM">100</field>
                        </shadow>
                    </value>
                    <value name="port">
                        <shadow type="math_number">
                            <field name="NUM">6</field>
                        </shadow>
                    </value>
                    <value name="compare">
                        <shadow type="math_number">
                            <field name="NUM">3</field>
                        </shadow>
                    </value>
                </block>
            `
        },
    ]
});