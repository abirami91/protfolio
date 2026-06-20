import "./App.css";

function App() {
  return (
    <main className="page">
      {/* Hero */}
      <section className="hero">
        <p className="eyebrow">
          EMBEDDED SOFTWARE · TEST AUTOMATION · MUNICH
        </p>

        <h1>
          Embedded Software &
          <br />
          Test Automation Engineer.
        </h1>

        <p className="intro">
          6+ years building automated validation frameworks, CI/CD pipelines,
          and HIL testing solutions for Automotive Radar, ADAS Camera Systems,
          and Robotics platforms.
        </p>

        <div className="actions">
          <a className="primary" href="/Abirami_Sridharan_CV.pdf">
            Download CV
          </a>

          <a className="secondary" href="#work">
            View work ↓
          </a>
        </div>

        <div className="tags">
          <span>Bosch Radar Gen6/Gen7</span>
          <span>ADAS Camera Systems</span>
          <span>RobCo Robotics</span>
          <span>ISO 26262</span>
          <span>Azure DevOps</span>
        </div>
      </section>

      {/* Experience */}
      <section id="work" className="section">
        <p className="eyebrow">SELECTED WORK</p>
        <h2>Engineering experience.</h2>

        <div className="card">
          <h3>Bosch Radar Gen6 & Gen7</h3>

          <ul>
            <li>
              Developed and maintained a global test automation framework
              supporting multiple Radar Gen6 and Gen7 hardware variants.
            </li>

            <li>
              Automated validation across unit, integration, and system test
              levels.
            </li>

            <li>
              Integrated automated test execution into Azure DevOps CI/CD
              pipelines.
            </li>

            <li>
              Developed CAPL-based application-layer system tests.
            </li>

            <li>
              Performed fault injection and diagnostic validation scenarios.
            </li>
          </ul>
        </div>

        <div className="card">
          <h3>RobCo Robotics</h3>

          <ul>
            <li>
              Developed validation workflows for industrial robotic systems
              focusing on motion accuracy and trajectory execution.
            </li>

            <li>
              Performed robot accuracy analysis and identified correction
              strategies to improve positioning and repeatability.
            </li>

            <li>
              Designed and developed a HIL-based test framework for validating
              different robot trajectory execution scenarios.
            </li>

            <li>
              Automated test execution and result evaluation for
              hardware-software integration testing.
            </li>

            <li>
              Collaborated with robotics, software, and controls teams to
              validate system behaviour across multiple operating conditions.
            </li>
          </ul>
        </div>

        <div className="card">
          <h3>T&S / Bosch ADAS Camera Systems</h3>

          <ul>
            <li>
              Worked on ADAS camera systems involving i.MX6 and Zynq-based
              processor platforms.
            </li>

            <li>
              Developed and supported features related to camera calibration for
              object detection workflows.
            </li>

            <li>
              Worked with ADTF filters for camera data processing and
              validation.
            </li>

            <li>
              Supported embedded software development, testing, and integration
              activities for camera-based ADAS systems.
            </li>
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <p className="eyebrow">TECHNICAL STRENGTHS</p>
        <h2>Technical strengths.</h2>

        <div className="skills-grid">
          <div className="skill-card">
            <h3>Test Automation & Validation</h3>

            <ul className="skill-list">
              <li>Python-based Test Automation</li>
              <li>CAPL & CANoe Development</li>
              <li>System & Integration Testing</li>
              <li>HIL Testing</li>
              <li>Fault Injection</li>
              <li>Code Coverage & Validation</li>
              <li>Requirements Verification</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>CI/CD & DevOps</h3>

            <ul className="skill-list">
              <li>Azure DevOps Pipelines</li>
              <li>Jenkins</li>
              <li>Git Version Control</li>
              <li>Docker</li>
              <li>Linux</li>
              <li>Automated Validation Workflows</li>
              <li>Continuous Integration</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Embedded Systems</h3>

            <ul className="skill-list">
              <li>Embedded Software Testing</li>
              <li>Microcontroller-based Systems</li>
              <li>i.MX6 & Zynq Processor Platforms</li>
              <li>Embedded Linux</li>
              <li>CAN Communication</li>
              <li>UART & SPI Interfaces</li>
              <li>Hardware-Software Integration</li>
              <li>Multi-Controller Architectures</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Automotive & Robotics</h3>

            <ul className="skill-list">
              <li>Automotive Radar Validation</li>
              <li>Radar Gen6 & Gen7 Platforms</li>
              <li>ADAS Camera Systems</li>
              <li>Camera Calibration</li>
              <li>Robot Accuracy Analysis</li>
              <li>Trajectory Validation</li>
              <li>Trace32 Debugging</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>ADAS & Computer Vision</h3>

            <ul className="skill-list">
              <li>Object Detection Workflows</li>
              <li>ADTF Filters</li>
              <li>Camera Data Processing</li>
              <li>Embedded Vision Platforms</li>
              <li>Root Cause Analysis</li>
              <li>Log Analysis</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <p className="eyebrow">SPECIAL PROJECTS & INTERESTS</p>
        <h2>Projects and interests.</h2>

        <div className="card">
          <h3>Robotic Arm Collision Monitoring using FPGA</h3>

          <ul>
            <li>
              Worked on a robotic arm platform integrating software and hardware
              components for collision monitoring.
            </li>

            <li>
              Implemented and validated FPGA-based interfaces using Xilinx
              development tools.
            </li>

            <li>
              Supported real-time communication between robotic control software
              and hardware modules.
            </li>

            <li>
              Performed testing and validation of collision monitoring
              functionality on the robotic platform.
            </li>

            <li>
              Gained practical experience in FPGA development, embedded systems,
              and robotic control architectures.
            </li>
          </ul>
        </div>

        <div className="card">
    <h3>Smart Parking Detection System using YOLOv8</h3>

    <ul>
      <li>
        Built a computer vision based smart parking prototype to classify parking
        spaces as empty or occupied.
      </li>

      <li>
        Trained a YOLOv8-based detection model for parking slot occupancy
        classification.
      </li>

      <li>
        Deployed the prototype on Raspberry Pi 4 with a Noir camera for real-time
        image capture and testing.
      </li>

      <li>
        Worked on data collection, model training, inference testing, and result
        validation for parking space detection.
      </li>
    </ul>
    </div>

     <div className="card">
  <h3>Sign Language Recognition System</h3>

  <ul>
    <li>
      Developed a real-time sign language recognition system using hand
      landmark detection and machine learning.
    </li>

    <li>
      Processed landmark features extracted from camera input to classify
      gestures and map them to words.
    </li>

    <li>
      Implemented data collection, model training, and live inference
      workflows.
    </li>

    <li>
      Deployed the solution on Raspberry Pi and hosted it through a local web
      server for real-time predictions and video streaming.
    </li>

    <li>
      Utilized Python, MediaPipe, OpenCV, and machine learning techniques for
      end-to-end system development.
    </li>
  </ul>
</div>

<div className="card">
  <h3>Edge-Based Environmental Monitoring Platform</h3>

  <ul>
    <li>
      Developed an edge computing platform for monitoring indoor humidity and
      environmental conditions using BLE-enabled sensors.
    </li>

    <li>
      Collected sensor data through Raspberry Pi and stored measurements for
      long-term tracking and analysis.
    </li>

    <li>
      Built a local web server for visualizing historical humidity data and
      generating reports.
    </li>

    <li>
      Validated the solution through continuous multi-day data collection and
      reporting, providing objective evidence for landlord discussions related
      to indoor moisture conditions.
    </li>

    <li>
      Currently extending the platform with automated Wi-Fi onboarding,
      self-service device setup, and cloud-ready deployment workflows.
    </li>

    <li>
      Exploring MLOps concepts including data pipelines, monitoring, model
      deployment, and long-term data management for future intelligent
      analytics.
    </li>
  </ul>
</div>
      </section>
    </main>
  );
}

export default App;