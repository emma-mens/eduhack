from multiprocessing.connection import Client

c = Client(('localhost', 5000))

c.send('why are you not normal?')
print('Got:', c.recv())