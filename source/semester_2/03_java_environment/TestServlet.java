// Import required Java libraries
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

/**
 * This is our test servlet. Remember that the name of the file has to
 * match the name of the class. We are extending a class from the servlet
 * library called HttpServlet and adding our specialized functionality to it.
 */
public class TestServlet extends HttpServlet {

    /**
     * If you needed any start-up code, you'd put it here.
     */
    public void init() throws ServletException
    {
        // Do required initialization
    }

    /**
     * Here we over-ride the default behavior of the base class. doGet is called
     * for regular web requests. There is also a doPost for form or data postings.
     * The request parameter has info about the web request that was sent to us.
     * We use the response parameter to send our data back.
     */
    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
        throws ServletException, IOException
    {
        // Set response content type.
        // It is possible to serve text, PDF, images, and other types of files
        // too. For the more common JSON files you can use "application/json"
        response.setContentType("text/html");

        // Grab our output stream we can write to
        PrintWriter out = response.getWriter();

        // Here we will print out some HTML. This will go to our client's web
        // browser. Rarely do we output HTML anymore, usually we output JSON
        // and the HTML is static.
        out.println("<html>");
        out.println("<h1>Hello World</h1>");
        out.println("</html>");
    }

    /**
     * Called when the app is shutdown.
     */
    public void destroy()
    {
        // do nothing.
    }
}