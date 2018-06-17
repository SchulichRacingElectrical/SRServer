import socket


class Getter:
    buffer_size = 4096
    port = 5000
    hostname = "192.168.0.11"
    serverSocket = None
    data = {}

    def __init__(self, ):
        self.serverSocket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        self.data = {'timestamp': 0, 'interval': 0, 'battery': 0, 'accelX': 0, 'accelY': 0, 'accelZ': 0, 'yaw': 0,
                     'pitch': 0,
                     'roll': 0, 'rpm': 0, 'map': 0, 'tps': 0, 'oilPressure': 0, 'afr': 0, 'coolantTemperature': 0,
                     'iat': 0,
                     'oilTemperature': 0, 'gear': 0, 'speed': 0, 'frontLeft': 0, 'frontRight': 0, 'rearLeft': 0,
                     'rearRight': 0,
                     'latitude': 0, 'longitude': 0, 'injectorPW': 0, 'fuelRate': 0, 'fuelTemp': 0, 'baro': 0, 'altitude': 0,
                     'session': 0,
                     'lambda': 0}
        self.serverSocket.bind((self.hostname, self.port))

    def update(self):
        data, server = self.serverSocket.recvfrom(self.buffer_size)
        self.serverSocket.recv(self.buffer_size)
        self.data = data
