import React, { useEffect, useState } from "react";
import "./Sales_dash.css";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export default function Sales_dash() {
  const [salesData, setSalesData] = useState(null);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/api/sales").then((response) => {
      setSalesData(response.data);
    });
  }, []);

  if (!salesData) return <p>Loading sales data...</p>;

  return (
    <div className="dashboard">
      <h2>Sales Dashboard</h2>

      {salesData.sales_by_date.length > 0 && (
        <div className="chart-container">
          <h3>Total Sales by Date</h3>
          <BarChart width={600} height={300} data={salesData.sales_by_date}>
            <XAxis dataKey="Date" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#ccc" />
            <Bar dataKey="Sales €" fill="#8884d8" />
          </BarChart>
        </div>
      )}

      {salesData.sales_by_region.length > 0 && (
        <div className="chart-container">
          <h3>Total Sales by Region</h3>
          <BarChart width={600} height={300} data={salesData.sales_by_region}>
            <XAxis dataKey="Region" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#ccc" />
            <Bar dataKey="Sales €" fill="#82ca9d" />
          </BarChart>
        </div>
      )}

      {salesData.sales_by_category.length > 0 && (
        <div className="chart-container">
          <h3>Total Sales by Category</h3>
          <BarChart width={600} height={300} data={salesData.sales_by_category}>
            <XAxis dataKey="Product Category" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#ccc" />
            <Bar dataKey="Sales €" fill="#ffc658" />
          </BarChart>
        </div>
      )}
    </div>
  );
}
