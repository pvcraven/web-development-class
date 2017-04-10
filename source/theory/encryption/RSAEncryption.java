import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.NoSuchAlgorithmException;
import java.security.PrivateKey;
import java.security.PublicKey;
import javax.crypto.Cipher;
import javax.xml.bind.DatatypeConverter;

public class RSAEncryption
{
    //Name of Encryption Algorithm
    public static final String algorithm = "RSA";

    //Name of Private Key File
    public static final String privateKeyFileString = "private.key";

    //Name of Public Key File
    public static final String publicKeyFileString = "public.key";

    public static void generateKeys(){
        try{
            final KeyPairGenerator generator = KeyPairGenerator.getInstance(algorithm);
            generator.initialize(1024);
            final KeyPair key = generator.generateKeyPair();

            File privateKeyFile = new File(privateKeyFileString);
            File publicKeyFile = new File(publicKeyFileString);

            if (privateKeyFile.getParentFile() != null){
                privateKeyFile.getParentFile().mkdirs();
            }
            privateKeyFile.createNewFile();

            if (publicKeyFile.getParentFile() != null){
                publicKeyFile.getParentFile().mkdirs();
            }
            publicKeyFile.createNewFile();

            ObjectOutputStream publicKey = new ObjectOutputStream(new FileOutputStream(publicKeyFile));
            publicKey.writeObject(key.getPublic());
            publicKey.close();

            ObjectOutputStream privateKey = new ObjectOutputStream(new FileOutputStream(privateKeyFile));
            privateKey.writeObject(key.getPrivate());
            privateKey.close();
        }

        catch (Exception e){
            e.printStackTrace();
        }
    }

    public static boolean areKeysPresent() {
        File privateKeyCheck = new File(privateKeyFileString);
        File publicKeyCheck = new File(publicKeyFileString);

        if (privateKeyCheck.exists() && publicKeyCheck.exists()) {
            return true;
        }
        return false;
    }

    public static byte[] encrypt(String myText, PublicKey key) {
        byte[] cipherText = null;
        try {
            final Cipher cipher = Cipher.getInstance(algorithm);
            cipher.init(Cipher.ENCRYPT_MODE, key);
            cipherText = cipher.doFinal(myText.getBytes());
        }

        catch (Exception e) {
            e.printStackTrace();
        }
        return cipherText;
    }

    public static String decrypt(byte[] myText, PrivateKey key) {
        byte[] decryptedText = null;
        try {
            final Cipher cipher = Cipher.getInstance(algorithm);
            cipher.init(Cipher.DECRYPT_MODE, key);
            decryptedText = cipher.doFinal(myText);
        }

        catch (Exception ex) {
            ex.printStackTrace();
        }

        return new String(decryptedText);
    }

    public static void main(String[] args) {
        try {
            if (!areKeysPresent()) {
                generateKeys();
            }

            final String originalText = "Here is some text to encrypt";
            ObjectInputStream inputStream = null;

            inputStream = new ObjectInputStream(new FileInputStream(publicKeyFileString));
            final PublicKey publicKey = (PublicKey) inputStream.readObject();
            final byte[] cipherText = encrypt(originalText, publicKey);

            inputStream = new ObjectInputStream(new FileInputStream(privateKeyFileString));
            final PrivateKey privateKey = (PrivateKey) inputStream.readObject();
            final String text = decrypt(cipherText, privateKey);

            System.out.println("Original: " + originalText);
            System.out.println("Encrypted: " + bytesToHex(cipherText));
            System.out.println("Decrypted: " + text);
        }

        catch (Exception e) {
            e.printStackTrace();
        }
    }

    private static String bytesToHex(byte[] hash){
        return DatatypeConverter.printHexBinary(hash);
    }
}
