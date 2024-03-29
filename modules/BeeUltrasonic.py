import time
import machine
from machine import Pin


class BeeUltrasonic:

    def __init__(self, port: tuple[int, int]) -> None:
        """
        @desc: Define Ultrasonic module
        @requires: ultrasonic module
        @args:
            - port: connected to BeeBrain through PORTx with x in [2, 6]
        @returns:
            None
        """
        self.triggerPin = Pin(port[0], Pin.OUT)
        self.echoPin = Pin(port[1], Pin.IN, pull=None)
        # Turn off trigger Pin
        self.triggerPin.value(0)
        self.echo_timeout_us = 500 * 2 * 30

    def distance_mm(self) -> int:
        """
        @desc: Get distance in milimets
        @requires: ultrasonic module
        @args:
            None
        @return:
            int: distance in mm
        """
        self.triggerPin.value(0)
        time.sleep_us(5)
        self.triggerPin.value(1)
        time.sleep_us(10)
        self.triggerPin.value(0)
        pulse_time = machine.time_pulse_us(
            self.echoPin, 1, self.echo_timeout_us)
        distance = int(pulse_time * 100 // 582)
        if distance > 1000 or distance < 0:
            return -1
        return distance
