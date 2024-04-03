Blockly.defineBlocksWithJsonArray([
// -> Ultrasonic
{
    "type": "ultrasonic",
    "message0": "%2 %1 get distance",
    "args0": [
      {
        "type": "field_grid_dropdown",
        "name": "port",
        "columns": 2,
        "options": [
          ["", ""],
          ["PORT2", "PORT2"],
          ["PORT3", "PORT3"],
          ["PORT4", "PORT4"],
          ["PORT5", "PORT5"],
          ["PORT6", "PORT6"],
        ]
      },
      {
        "type": "field_image",
        "src": "/static/MicroBlock/images/icon/ultrasonic.png",
        "width": 45,
        "height": 45,
        "alt": "ultrasonic"
      }
    ],
    "inputsInline": true,
    "output": "Number",
    "colour": "#238c3f",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "ultrasonic_lower_than",
    "message0": "%4 %2 is %3 %1 mm?",
    "args0": [
      {
        "type": "input_value",
        "name": "distance",
      },
      {
        "type": "field_dropdown",
        "name": "port",
        "columns": 2,
        "options": [
          ["", ""],
          ["PORT2", "PORT2"],
          ["PORT3", "PORT3"],
          ["PORT4", "PORT4"],
          ["PORT5", "PORT5"],
          ["PORT6", "PORT6"],
        ]
      },
      {
        "type": "field_dropdown",
        "name": "compare",
        "options": [
          ["lower than", "<="],
          ["greater than", ">="],
          ["equal to", "=="],
        ]
      },
      {
        "type": "field_image",
        "src": "/static/MicroBlock/images/icon/ultrasonic.png",
        "width": 45,
        "height": 45,
        "alt": "ultrasonic"
      }
    ],
    "inputsInline": true,
    "output": "Boolean",
    "colour": "#238c3f",
    "tooltip": "",
    "helpUrl": ""
  },
]);