from http.server import SimpleHTTPRequestHandler
import socketserver
from sys import argv


def run_server(host="localhost", port=8000):
    print(f"[+] Running server on http://{host}:{port}")

    SimpleHTTPRequestHandler.extensions_map.update({
        ".js": "application/javascript",
    })

    httpd = socketserver.TCPServer((host, port), SimpleHTTPRequestHandler)
    httpd.serve_forever()


def run_server_from_args():
    try:
        try:
            host = argv[2]
        except IndexError:
            host = "localhost"
        port = int(argv[1])
        run_server(host, port)
    except (TypeError, ValueError):
        print("[!] ERROR !!")
        print(f"[!] command structure `python {argv[0]} <PORT> <HOST>`")
        quit()


if __name__ == '__main__':
    if len(argv) > 1:
        run_server_from_args()
    else:
        run_server()
