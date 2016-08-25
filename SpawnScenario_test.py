import unittest
from webapp2 import Response

from google.appengine.api import memcache
from google.appengine.ext import ndb
from google.appengine.ext import testbed

from main import WebhookHandler

# Read keys.ini file at program start (don't forget to put your keys in there!)
keyConfig = ConfigParser.ConfigParser()
keyConfig.read(["keys.ini", "..\keys.ini"])
AdminChatId = keyConfig.get('BotAdministration', 'ADMIN_GROUP_CHAT_ID')

class MockedRequestBody:
    body = '{"message": {"date": 1472106095, "text": "spawn scenario for BedRoom", "from": {"username": "SalamiArmy", "first_name": "Ashley", "last_name": "Lewis", "id": ' + str(AdminChatId) + '}, "message_id": 24, "chat": {"username": "SalamiArmy", "first_name": "Ashley", "last_name": "Lewis", "type": "private", "id": ' + str(AdminChatId) + '}}, "update_id": 3527939}'

class TestSpawnScenario(unittest.TestCase):
    def setUp(self):
        # First, create an instance of the Testbed class.
        self.testbed = testbed.Testbed()
        # Then activate the testbed, which prepares the service stubs for use.
        self.testbed.activate()
        # Next, declare which service stubs you want to use.
        self.testbed.init_datastore_v3_stub()
        self.testbed.init_memcache_stub()
        # Clear ndb's in-context cache between tests.
        # This prevents data from leaking between tests.
        # Alternatively, you could disable caching by
        # using ndb.get_context().set_cache_policy(False)
        ndb.get_context().clear_cache()

    def test_SpawnScenario(self):
        myWebHookHandler = WebhookHandler()
        es = ndb.Model.get_or_insert(str(AdminChatId))
        es.enabled = True
        es.put()
        myWebHookHandler.EnableStatus = ndb.BooleanProperty(indexed=False, default=False)
        myWebHookHandler.request = MockedRequestBody
        myWebHookHandler.response = Response()
        myWebHookHandler.post()

    def tearDown(self):
        self.testbed.deactivate()

