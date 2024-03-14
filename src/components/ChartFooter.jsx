
export default function ChartFooter() {
  return (
    <div className="footer-container">
      <div className="show-total">
        <p>Total this month</p>
        <h1>$478.33</h1>
      </div>
      <div className="show-diff">
        <p className="difference">+2.4%</p>
        <p className="note">from last month</p>
      </div>
    </div>
  )
}
