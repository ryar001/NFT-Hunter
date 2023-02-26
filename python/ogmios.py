# import os
# from pycardano import *
# import asyncio
# import websockets
import json
# # msg = json.dumps({
# #     "type": "jsonwsp/request",
# #     "version": "1.0",
# #     "servicename": "ogmios",
# #     "methodname": "FindIntersect",
# #     "args": {"points": ["origin"]},
# #     "mirror": {"step": "INIT"}
# # })


# # async def hello():
# #     async with websockets.connect("ws://localhost:1337") as websocket:
# #         await websocket.send(msg)
# #         gg = await websocket.recv()
# #         print(gg)
# # asyncio.run(hello())


# def build_context(network: Network) -> OgmiosChainContext:
#     ws_url = "ws://localhost:1337"
#     return OgmiosChainContext(ws_url, network)
from websocket import create_connection

ws = create_connection("ws://localhost:1337")
msg = json.dumps({
    "type": "jsonwsp/request",
    "version": "1.0",
    "servicename": "ogmios",
    "methodname": "RequestNext",
    "args": {},
    "mirror": None
})

print(ws.recv())

ws.send("msg")
print("Sent")
print("Receiving...")
result = ws.recv()
print("Received '%s'" % result)
ws.close()
