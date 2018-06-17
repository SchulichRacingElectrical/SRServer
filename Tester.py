import json

from getter import Getter


def main():
    getter = Getter()
    while True:
        getter.update()
        data = json.loads(getter.data.decode('utf-8'))
        print(data)


main()
