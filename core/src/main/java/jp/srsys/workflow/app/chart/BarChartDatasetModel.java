package jp.srsys.workflow.app.chart;

import java.util.List;
import lombok.Builder;

@Builder
public record BarChartDatasetModel(String label, List<Integer> data) {

}
