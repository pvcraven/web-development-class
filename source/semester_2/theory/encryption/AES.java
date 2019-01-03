import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import javax.xml.bind.DatatypeConverter;

public class AES
{
    public static void main(String[] args) throws Exception{
        String myText = "Hello World";
        System.out.println("My Text: " + myText); //print original text
        
        KeyGenerator generator = KeyGenerator.getInstance("AES");
        generator.init(128);
        SecretKey key = generator.generateKey();
        System.out.println("AES Key: " + bytesToHex(key.getEncoded()));
        
        Cipher aesCipher = Cipher.getInstance("AES");
        aesCipher.init(Cipher.ENCRYPT_MODE, key);
        byte[] encrypted = aesCipher.doFinal(myText.getBytes());
        System.out.println("Encrypted Text: " + bytesToHex(encrypted));
        
        
        aesCipher.init(Cipher.DECRYPT_MODE, key);
        byte[] byteText = aesCipher.doFinal(encrypted);
        String decrypted = new String(byteText);
        System.out.println("DecryptedText: " + decrypted);
    }
    
    private static String bytesToHex(byte[] hash){
        return DatatypeConverter.printHexBinary(hash);
    }
}
