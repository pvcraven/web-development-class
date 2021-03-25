import tweepy

# The keys for the app
consumer_key = "secret_data_goes_here"
consumer_secret = "secret_data_goes_here"

# Authenticate to Twitter
auth = tweepy.OAuthHandler(consumer_key, consumer_secret)

try:
    redirect_url = auth.get_authorization_url()
    print(redirect_url)
except tweepy.TweepError:
    print('Error! Failed to get request token.')

# ask user to verify the PIN generated in broswer
verifier = input('PIN: ').strip()
auth.get_access_token(verifier)
print(f'key = "{auth.access_token}"')
print(f'secret = "{auth.access_token_secret}"')

# authenticate and retrieve user name
auth.set_access_token(auth.access_token, auth.access_token_secret)
api = tweepy.API(auth)
username = api.me().name
print('Ready to post to ' + username)