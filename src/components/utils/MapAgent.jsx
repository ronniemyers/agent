import { Link } from "react-router-dom";
import Error from "./Error";

function MapAgent({ agents, errors, mapAll }) {
  return (
    <>
      {agents.map((agent) => {
        return (
          <div key={agent.agentId}>
            <div className="flex-container">
              <div className="data">
                <p>{agent.agentId}</p>
                <p className="field">First name</p>
                <p>{agent.firstName}</p>
                <p className="field">Middle name</p>
                <p>{agent.middleName}</p>
                <p className="field">Last name</p>
                <p>{agent.lastName}</p>
                <p className="field">Date of birth</p>
                <p>{agent.dob}</p>
                <p className="field">Height (inches)</p>
                <p>{agent.heightInInches}</p>
                {mapAll !== null && (
                  <div className="flex-container svgIcon">
                    <Link to={`/edit/${agent.agentId}`}>edit</Link>
                    <Link to={`/delete/${agent.agentId}`}>delete</Link>
                  </div>
                )}
              </div>
              <Error errors={errors} />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default MapAgent;
