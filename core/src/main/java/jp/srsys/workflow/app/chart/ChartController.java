package jp.srsys.workflow.app.chart;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("chart")
public class ChartController {

  ObjectMapper json = new ObjectMapper();

  @GetMapping
  public String chart(Model model) {
    model.addAttribute("title", "Weekly Chart");
    return "chart/index";
  }
}
