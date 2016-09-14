#!/usr/bin/env python
import SimpleHTTPServer

class NoCacheHTTPRequestHandler(SimpleHTTPServer.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-cache")
        SimpleHTTPServer.SimpleHTTPRequestHandler.end_headers(self)

if __name__ == '__main__':
    SimpleHTTPServer.test(HandlerClass=NoCacheHTTPRequestHandler)
