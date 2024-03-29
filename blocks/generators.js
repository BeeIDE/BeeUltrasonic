function check_if_top_block_has_hat(block){
   if (block.getRootBlock().hat === 'cap') return true;
   else return false;
}

Blockly.Python['ultrasonic'] = function(block) {
   if (!check_if_top_block_has_hat(block)) return ['', Blockly.Python.ORDER_NONE];

   Blockly.Python.definitions_['from_BeeBrain_import_bee'] = 'from BeeBrain import bee';

   Blockly.Python.definitions_['from_BeeUltrasonic_import_BeeUltrasonic'] = 'from BeeUltrasonic import BeeUltrasonic';

   var port = block.getFieldValue('port');
   Blockly.Python.definitions_['ultrasonic_BeeUltrasonic'] = `ultrasonic = BeeUltrasonic(bee.${port})`;

   var code = `ultrasonic.distance_mm()`;
   return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['ultrasonic_lower_than'] = function(block) {
   if (!check_if_top_block_has_hat(block)) return ['', Blockly.Python.ORDER_NONE];

   Blockly.Python.definitions_['from_BeeBrain_import_bee'] = 'from BeeBrain import bee';

   Blockly.Python.definitions_['from_BeeUltrasonic_import_BeeUltrasonic'] = 'from BeeUltrasonic import BeeUltrasonic';

   var port = block.getFieldValue('port');
   Blockly.Python.definitions_['ultrasonic_Ultrasonic'] = `ultrasonic = BeeUltrasonic(bee.${port})`;
   var distance_mm = Blockly.Python.valueToCode(block, 'distance', Blockly.Python.ORDER_ATOMIC);
   var compare = block.getFieldValue('compare');
   var code = `ultrasonic.distance_mm() ${compare} ${distance_mm}`;

   return [code, Blockly.Python.ORDER_NONE];
};