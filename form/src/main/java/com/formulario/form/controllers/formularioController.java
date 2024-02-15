package com.formulario.form.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.ui.Model;
import java.util.Map;


@Controller
@RequestMapping("/form")
public class formularioController {
    @GetMapping("/formulario")
    public String formulario(){
        return("formulario.html");
    }

    @PostMapping("/submit")
    public String enviarFormulario(@RequestParam Map<String, String> formData, Model model){
        System.out.println("Recibido: " + formData);
        model.addAttribute("graciasMensaje","Gracias por enviar el formulario!");
        return "formulario";
    }
}
