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

    # Get tweets from timeline
    timeline = api.user_timeline("@professorcraven", count=10)

    # Loop through each tweet
    for tweet in timeline:

        # Go ahead and favorite the tweet
        if not tweet.favorited:
            tweet.favorite()
            print("Tweet favorited")


main()
