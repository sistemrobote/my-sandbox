//import org.springframework.stereotype.Component;

@Component
 class Engine {
    public String start () {
        return "Engine started";
    }
}

@component
 class Car {

     private Engine engine;

     @Autowired
     public Car (Engine engine) {
        this.engine = engine;
     }

     

}
