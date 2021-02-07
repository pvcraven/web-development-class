import javax.json.bind.Jsonb;
import javax.json.bind.JsonbBuilder;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;


@WebServlet(name = "NameListGetServlet", value = "/api/name_list_get")
public class NameListGetServlet extends HttpServlet {
    private final static Logger log = Logger.getLogger(PersonDAO.class.getName());

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        log.log(Level.FINE, "Get people");

        // Get setup up to output JSON text
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();

        // Use our DAO to get a list of people
        List <Person> peopleList = PersonDAO.getPeople();

        Jsonb jsonb = JsonbBuilder.create();
        String jsonString = jsonb.toJson(peopleList);

        // Write out that string
        out.println(jsonString);
    }
}