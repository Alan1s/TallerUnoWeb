package com.formulario.form.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@RequestMapping("/form")
public class formularioController {
    @GetMapping("/formulario")
    public String formulario(){
        return("formulario.html");
    }
}
