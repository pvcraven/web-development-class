package edu.simpson.craven.mainapp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.List;

@WebServlet(name = "NameListGetServlet", value = "/api/name_list_get")
public class NameListGetServlet extends HttpServlet {
    private final static Logger log = Logger.getLogger(NameListGetServlet.class.getName());

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        // Log info to the server's debug log
        log.log(Level.INFO, "Called doPost()");

        // Get setup up to output JSON text
        response.setContentType("text/plain");
        PrintWriter out = response.getWriter();

        // Use our DAO to get a list of people
        List <Person> peopleList = PersonDAO.getPeople();

        // Write out to debug log that we finished without error, and how many records
        log.log(Level.INFO, "Done with doPost()");
        log.log(Level.INFO, "Got " + peopleList.size() +" records.");

        // Output to the web page
        out.println("NameListGetServlet doPost - Got " + peopleList.size() +" records.");
    }
}
