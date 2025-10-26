package jp.srsys.workflow.app.chart;

import java.util.List;

public record BarChartDataModel(List<String> labels, List<BarChartDatasetModel> datasets) {

}
