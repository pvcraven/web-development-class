package edu.simpson.craven.mainapp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.logging.Level;
import java.util.logging.Logger;

@WebServlet(name = "NameListGetServlet", value = "/api/name_list_get")
public class NameListGetServlet extends HttpServlet {
    private final static Logger log = Logger.getLogger(NameListGetServlet.class.getName());

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // Output type
        response.setContentType("text/plain");

        // Print writer
        PrintWriter out = response.getWriter();
        out.println("hi - doGet");

        // Log info to the server's debug log
        log.log(Level.INFO, "Called doGet()");
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // Output type
        response.setContentType("text/plain");

        // Print writer
        PrintWriter out = response.getWriter();
        out.println("hi - doPost");

        // Log info to the server's debug log
        log.log(Level.INFO, "Called doPost()");
    }
}
