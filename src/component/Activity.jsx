import React from "react";
import "./Activity.css";
import { Select } from 'antd';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
export default function Activity() {
    const { Option } = Select;

  const data = [
    {
      Chain: "Polygon",
      Action: "Deposit",
      DateTime: "12/12/2021, 12:00 AM",
      Currency: "USDT",
      Volume: "3.10/ $3.00",
      Status: "Pending",
      Color: "#FFC400",
    },
    {
      Chain: "Polygon",
      Action: "Deposit",
      DateTime: "12/12/2021, 12:00 AM",
      Currency: "USDT",
      Volume: "3.10/ $3.00",
      Status: "Requested",
      Color: "#FF7A00",
    },
    {
      Chain: "Polygon",
      Action: "Deposit",
      DateTime: "12/12/2021, 12:00 AM",
      Currency: "USDT",
      Volume: "3.10/ $3.00",
      Status: "Requested",
      Color: "#FF7A00",
    },
    {
      Chain: "Polygon",
      Action: "Deposit",
      DateTime: "12/12/2021, 12:00 AM",
      Currency: "USDT",
      Volume: "3.10/ $3.00",
      Status: "Approved",
      Color: "#03AC00",
    },
    {
      Chain: "Polygon",
      Action: "Deposit",
      DateTime: "12/12/2021, 12:00 AM",
      Currency: "USDT",
      Volume: "3.10/ $3.00",
      Status: "Approved",
      Color: "#03AC00",
    },
    {
      Chain: "Polygon",
      Action: "Deposit",
      DateTime: "12/12/2021, 12:00 AM",
      Currency: "USDT",
      Volume: "3.10/ $3.00",
      Status: "Approved",
      Color: "#03AC00",
    },
    {
      Chain: "Polygon",
      Action: "Deposit",
      DateTime: "12/12/2021, 12:00 AM",
      Currency: "USDT",
      Volume: "3.10/ $3.00",
      Status: "Approvedd",
      Color: "#03AC00",
    },
    {
      Chain: "Polygon",
      Action: "Deposit",
      DateTime: "12/12/2021, 12:00 AM",
      Currency: "USDT",
      Volume: "3.10/ $3.00",
      Status: "Approved",
      Color: "#03AC00",
    },
    {
      Chain: "Polygon",
      Action: "Deposit",
      DateTime: "12/12/2021, 12:00 AM",
      Currency: "USDT",
      Volume: "3.10/ $3.00",
      Status: "Approved",
      Color: "#03AC00",
    },
    {
      Chain: "Polygon",
      Action: "Deposit",
      DateTime: "12/12/2021, 12:00 AM",
      Currency: "USDT",
      Volume: "3.10/ $3.00",
      Status: "Approved",
      Color: "#03AC00",
    },
    {
      Chain: "Polygon",
      Action: "Deposit",
      DateTime: "12/12/2021, 12:00 AM",
      Currency: "USDT",
      Volume: "3.10/ $3.00",
      Status: "Approved",
      Color: "#03AC00",
    },
    {
      Chain: "Polygon",
      Action: "Deposit",
      DateTime: "12/12/2021, 12:00 AM",
      Currency: "USDT",
      Volume: "3.10/ $3.00",
      Status: "Declined",
      Color: "#FF0F00",
    },
    {
      Chain: "Polygon",
      Action: "Deposit",
      DateTime: "12/12/2021, 12:00 AM",
      Currency: "USDT",
      Volume: "3.10/ $3.00",
      Status: "Declined",
      Color: "#FF0F00",
    },
  ];
  return (
    <div>
      <div className="liquidity-activity-container">
        <div className="activity-sort-daily-download">
          <div className="activity">Activity</div>
          <div className="sort">
            
            <Select defaultValue="Sort" style={{ width: 90 }}>
            <Option value="Option 1">currency</Option>
            <Option value="Option 2">currency</Option>
            <Option value="Option 3">currency</Option>
            </Select>
          </div>
          <div className="daily">
            <Select defaultValue="Daily" style={{ width: 100 }}>
            <Option value="Daily">Daily</Option>
            <Option value="Weekly">Weekly</Option>
            <Option value="Monthly">Monthly</Option>
            </Select>


          </div>
          <div className="download">
            <Button
                    //  type="primary"
                    style={{background:"transparent",color:"white"}}
                     icon={<DownloadOutlined />}
                     href="https://example.com/file.pdf"
                     download
            >
             {/* Download  */}
            </Button>
          </div>

        </div>

        <div className="table-container">
          <table class="table table-dark ">
            <thead>
              <tr>
                <th>Chain</th>
                <th>Action</th>
                <th>DateTime</th>
                <th>Currency</th>
                <th>Volume</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.Chain}</td>
                  <td>{item.Action}</td>
                  <td>{item.DateTime}</td>
                  <td>{item.Currency}</td>
                  <td>{item.Volume}</td>
                  <td style={{ color: `${item.Color}` }}>{item.Status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
