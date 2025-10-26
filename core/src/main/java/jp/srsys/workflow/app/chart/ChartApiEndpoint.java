package jp.srsys.workflow.app.chart;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/chart")
public class ChartApiEndpoint {
  @GetMapping(value = "data")
  public BarChartDataModel getChartData() {
    return new BarChartDataModel(
        List.of("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"),
        List.of(BarChartDatasetModel.builder()
            .label("Weekly Outcome")
            .data(List.of(30, 20, 30, 40, 50, 60, 70))
            .build()));
  }
}
