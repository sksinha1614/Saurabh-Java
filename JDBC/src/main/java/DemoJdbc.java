import java.sql.*;

public class DemoJdbc {

    public static void main(String[] args) throws Exception {

        String url = "jdbc:postgresql://localhost:5432/company_db";
        String uname = "postgres";
        String pass = System.getenv("DB_PASSWORD");

        String sql = "SELECT * FROM employees";

        Class.forName("org.postgresql.Driver");

        Connection con = DriverManager.getConnection(url, uname, pass);
        System.out.println("Connection Established");

        Statement st = con.createStatement();
        ResultSet rs = st.executeQuery(sql);

        while (rs.next()) {
            System.out.print(rs.getInt(1) + "-");
            System.out.print(rs.getString(2) + "-");
            System.out.print(rs.getString(3) + "-");
            System.out.print(rs.getInt(4) + "-");
            System.out.print(rs.getInt(5) + "-");
            System.out.println(rs.getString(6));
        }

        con.close();

        System.out.println("Connection Closed");
    }
}