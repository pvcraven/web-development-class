import javax.xml.bind.DatatypeConverter;
import java.security.MessageDigest;

public class Hash
{
    public static void main(String[] args) throws Exception{
        String myText = "Hello World";
        String hash = DatatypeConverter.printHexBinary(MessageDigest.getInstance("SHA-1").digest(myText.getBytes("UTF-8")));
        System.out.println("Original: " + myText);
        System.out.println("Hash: " + hash);
    }
}
