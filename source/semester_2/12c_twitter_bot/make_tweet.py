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

    api.update_status("WooHoo! Iowa is the best.")
    print("Done tweeting.")

main()
