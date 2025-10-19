package jp.srsys.workflow.app.echo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("echo")
public class EchoController {

  @ModelAttribute
  public EchoForm setupEchoForm() {
    return new EchoForm();
  }

  @GetMapping
  public String index(Model model) {
    return "echo/index";
  }

  @PostMapping("hello")
  public String hello(@Validated EchoForm form, BindingResult result, Model model) {
    if (result.hasErrors()) {
      return "echo/index";
    }
    model.addAttribute("name", form.getName());
    return "echo/hello";
  }

}
