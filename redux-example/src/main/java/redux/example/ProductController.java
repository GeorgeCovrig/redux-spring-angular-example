package redux.example;


import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Arrays;
import java.util.List;

@Controller
@RequestMapping("/product")
@CrossOrigin(origins = "http://localhost:4200")

public class ProductController {

    @GetMapping(value = "/all")
    public ResponseEntity<List<String>> getAllProducts(){
        return ResponseEntity.ok(Arrays.asList("Banana", "Chocolate", "Biscuits"));
    }

}