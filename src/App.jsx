import MInput from "./components/Input/Button";
import MSelect from "./components/Select/Select";
import ResultB from "./components/Button/ResultB";
function App() {

  return (
    <>
      <section
        style={{
          display: "grid",
          placeItems: "center",
          height: "100vh",
          width: "100vw",
          backgroundColor: "#5A5766",
        }}
      >
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: '100px 160px',
          gridColumnGap: "30px",
          gridRowGap: "10px",
          backgroundColor: "#48435C",
          height: "390px",
          width: "1050px",
          borderRadius: "10px",
          boxShadow: "2px 2px 37px -13px rgba(0,0,0,0.75)",
          padding: "40px",
        }}>
          <div style={{
            gridArea: '1/1/3/3',
            placeItems: "center",
          }}>
            <h1
            style={{
              color: "#fff",
              fontSize: "20px",
              fontWeight: "bold",
            }}
            >Valor</h1>
            <MInput/>
          </div>
          <div style={{
            gridArea: '1/2/3/3',
            placeItems: "center",
          }}>
            <h1
            style={{
              color: "#fff",
              fontSize: "20px",
              fontWeight: "bold",
            }}
            >De</h1>
            <MSelect/>
          </div>
          <div style={{
            gridArea: '1/3/3/3',
            placeItems: "center",
          }}>
            <h1
            style={{
              color: "#fff",
              fontSize: "20px",
              fontWeight: "bold",
            }}
            >Para</h1>
            <MSelect/>
          </div>
          <div style={{
            display: "grid",
            gridArea: '2/3/3/3',
          
          }}>
            <ResultB/>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
