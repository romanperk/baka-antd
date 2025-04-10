import React from "react";
import { Card, Typography, Divider, Space, Empty } from "antd";
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

export const CustomPieChart = ({ title, icon, data, colors, downMd }) => {
  const hasData = data && data.length > 0;

  return (
    <Card>
      <Space align="center">
        {icon}
        <Typography.Title level={5} style={{ margin: 0 }}>
          {title}
        </Typography.Title>
      </Space>
      <Divider style={{ marginBottom: 0, marginTop: 20 }} />
      <ResponsiveContainer width="100%" height={280}>
        {hasData ? (
          <RechartsPieChart>
            <Pie
              data={data}
              dataKey="value"
              outerRadius="60%"
              innerRadius="30%"
              labelLine={false}
              isAnimationActive={false}
              label={({ name, percent }) =>
                downMd ? null : `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {data.map((_entry, index) => (
                <Cell
                  key={`chart-cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>
            <Tooltip animationDuration={0} />
            {downMd && <Legend verticalAlign="bottom" height={36} />}
          </RechartsPieChart>
        ) : (
          <div
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Empty
              description="No data available"
              image={Empty.PRESENTED_IMAGE_SIMPLE}
            />
          </div>
        )}
      </ResponsiveContainer>
    </Card>
  );
};
