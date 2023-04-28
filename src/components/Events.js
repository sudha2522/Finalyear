import React from 'react';
import './events.css'

function Events() {
  return (
    <table style={{ width: '100%' }}>
      <tbody>
        <tr >
          <td className='tdd' >
            <button className="bt">28/11/22</button>
          </td>
          <td className='tdd' >
            <b>Ph.D Admissions Jan 2023 -</b>
            <a className="ap" href="admissions/shortlist/PHD admissions_Jan_2023.html">
              click here for Ph.D selection List
            </a>
          </td>
        </tr>

        <tr>
        <td className='tdd' >
          <button className="bt">13/09/22</button>
          </td>
          <td className='tdd' >
            <b>New BTech program in Electrical Engineering</b>

            <p>
              IIT Hyderabad has launched a new BTech(EE) specialization in IC Design and Technology. Further details about BTech in EE(IDT) are The previous year JEE opening and closing ranks in EE are
            </p>
          </td>
        </tr>

        <tr>
        <td className='tdd' >          <button className="bt">24/06/22</button>
          </td>
          <td className='tdd' >
            <b>PhD Admissions July 2022 -</b>
            <a className="ap" href="admissions/results/PhD_July_2022/PhD_results.html">
              List of candidates selected for PhD Admission in July 2022 session!!
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Events;
