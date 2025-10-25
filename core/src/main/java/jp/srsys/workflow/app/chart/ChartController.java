package jp.srsys.workflow.app.chart;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("chart")
public class ChartController {

  @GetMapping
  public String chart() {
    return "chart/index";
  }
}
