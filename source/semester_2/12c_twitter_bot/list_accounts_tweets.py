import tweepy

# The keys for the app
consumer_key = "secret_data_goes_here"
consumer_secret = "secret_data_goes_here"

# User's account key/secret
key = "secret_data_goes_here"
secret = "secret_data_goes_here"

def main():
    # Authenticate to Twitter
    auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(key, secret)

    # Create API object
    api = tweepy.API(auth)

    # Make sure we are logged in
    # Not really needed
    try:
        api.verify_credentials()
        print("Authentication OK")
    except:
        print("Error ")
        return

    # Get tweets from timeline
    timeline = api.user_timeline("@professorcraven", count=10)

    # Loop through each tweet
    for tweet in timeline:

        # Print. You can also save in a file.
        # Can't pull more that 3,000 unless this is your own account.
        print(f"{tweet.user.name} said:\n{tweet.text}")

main()
