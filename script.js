/* Project SAGE v2.0 | production */

document.addEventListener("DOMContentLoaded",()=>{

    initializeExecutiveDashboard();

    initializeLeadershipTenure();

    initializeMissionTimeline();

    initializeOperationalEvolution();

    initializeOperatingArchive();

    initializeOperationalNetworkMap();

});

const revealCards = document.querySelectorAll(".reveal-card");

const revealObserver = new IntersectionObserver(
(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

            revealObserver.unobserve(entry.target);

        }

    });

},
{
    threshold:.15
});

revealCards.forEach(card=>{

    revealObserver.observe(card);

});

function initializeOperationalEvolution(){

    const section = document.querySelector(".operational-evolution");

    if(!section) return;

    const header = section.querySelector(".oe-header");

    if(!header) return;

    let played = false;

    const observer = new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting && !played){

                played = true;
header.classList.add("online");

                observer.disconnect();

            }

        });

    },{

        threshold:.32

    });

    observer.observe(section);

}

async function initializeOperationalNetworkMap(){

    const section = document.querySelector(".operational-network");
    const svg = document.querySelector("#on-operational-map");

    if(!section || !svg) return;

    const frame = section.querySelector(".on-map-frame");

    const nationLayer = svg.querySelector("#on-map-nation-layer");
    const stateLayer  = svg.querySelector("#on-map-state-layer");
    const routeLayer  = svg.querySelector("#on-map-route-layer");
    const nodeLayer   = svg.querySelector("#on-map-node-layer");
    const labelLayer  = svg.querySelector("#on-map-label-layer");
    const signalLayer = svg.querySelector("#on-map-signal-layer");

    const status = section.querySelector("#on-map-status");

    const detailEyebrow =
        section.querySelector(".on-map-detail-eyebrow");

    const detailTitle =
        section.querySelector(".on-map-detail-title");

    const detailLocation =
        section.querySelector(".on-map-detail-location");

    const detailCopy =
    section.querySelector(".on-map-detail-copy");

const intelligenceSurface =
    section.querySelector(".top-intelligence-surface");

const intelligenceDossier =
    section.querySelector("#top-intelligence-dossier");

const intelligenceState =
    section.querySelector(".top-intelligence-state");

const filterButtons = [
    ...section.querySelectorAll(".on-map-filter")
];

    if(

        !frame ||
        !nationLayer ||
        !stateLayer ||
        !routeLayer ||
        !nodeLayer ||
        !labelLayer ||
        !signalLayer

    ){

        console.warn(
            "Operational Network map layers are incomplete."
        );

        return;

    }

    const networkState = {

        activeFilter:"all",

        pinnedNode:null,

        initialized:false,

        traceRunId:0

    };

    const enterprisePathways = {

        authority:{

            eyebrow:"ENTERPRISE GOVERNANCE",

            title:"Enterprise Governance Pathway",

            location:"Decision Authority → Enterprise Sustainment",

            detail:
                "How enterprise-level authority connects to the sustainment environment responsible for translating strategic direction into governed execution.",

            paths:[
                ["pentagon","asc"]
            ]

        },

        governance:{

            eyebrow:"PROGRAM MANAGEMENT",

            title:"Integrated Program Governance",

            location:"Portfolio Oversight → Program Administration → Local Execution",

            detail:
                "How portfolio governance, program administration, and host-installation assurance converge on the operating environment without interrupting service delivery.",

            paths:[
                ["asc","406-afsb","lrc-rucker","camp-bull-simons"],
                ["96-lrs","camp-bull-simons"]
            ]

        },

        contract:{

            eyebrow:"SERVICE DELIVERY",

            title:"Distributed Delivery Network",

            location:"Delivery Partners → Local Operating Environment",

            detail:
                "How successive delivery organizations, prime relationships, and parent-enterprise structures connected to a stable local operating capability across provider transitions.",

            paths:[
                ["one-stop","camp-bull-simons"],
                ["technica","camp-bull-simons"],
                ["red-river","tlc","camp-bull-simons"],
                ["chenega-corporation","chenega-bls","camp-bull-simons"]
            ]

        },

        operations:{

            eyebrow:"OPERATIONS",

            title:"Customer Enablement Pathway",

            location:"Operating Capability → Supported Customer",

            detail:
                "How the local operating capability translated governed material, logistics, and compliance processes into reliable service for the supported customer.",

            paths:[
                ["camp-bull-simons","7-sfg"]
            ]

        },

        visibility:{

            eyebrow:"INFORMATION & CONTROL",

            title:"Enterprise Information Pathway",

            location:"Local Activity → Governed Information → Authorized Visibility",

            detail:
                "How local transactions and authorization controls became governed enterprise information supporting accountability, compliance, reporting, and authorized decision visibility.",

            paths:[
                ["camp-bull-simons","eesoh-mis","pentagon"],
                ["96-lrs","eesoh-mis"]
            ]

        }

    };

    const defaultDetail = {

        eyebrow:"NETWORK STATUS",

        title:"Enterprise Network Online",

        location:"Multiple United States Locations",

        detail:
            "Select or hover over a location to isolate its " +
            "program relationships, governance connections, " +
            "contract role, and enterprise capabilities."

    };

const stakeholderIntelligence = {

    "pentagon": {
        role: "EXECUTIVE VISIBILITY STAKEHOLDER",
        theme: "Decision-Ready Visibility",
        title: "The Pentagon",
        location: "Arlington · Virginia",
        relationship: "Strategic enterprise visibility context within the broader defense operating environment",
        businessPressure: "Senior defense organizations depend on trustworthy information flowing upward from distributed operating environments. Local activity becomes strategically useful only when data, controls, and reporting remain consistent enough to support enterprise awareness.",
        stakeholderExpectation: "Operational information should be accurate, governed, traceable, and capable of supporting authorized enterprise-level visibility without requiring senior leaders to reconstruct conditions at the point of execution.",
        leadershipCommitment: "Make the operating picture legible before leadership needs it.",
        executiveContribution: "Michael maintained disciplined local controls, EESOH-MIS administration, reporting practices, inventory accountability, and audit-ready records that converted physical hazardous-material activity into governed operational information.",
        riskReduction: [
            "Reduced data-integrity and reporting ambiguity",
            "Maintained traceable local transaction and authorization records",
            "Preserved audit-ready information through organizational change",
            "Reduced dependence on informal or person-specific knowledge",
            "Improved confidence in the operating picture available to authorized users"
        ],
        enterpriseValue: "A controlled local operation produces information that can travel upward through the enterprise without losing meaning, traceability, or credibility.",
        organizationalOutcome: "Leadership visibility is supported by governed information rather than reconstructed activity.",
        enterpriseInterface: ["Camp Bull Simons Program","EESOH-MIS","Authorized Enterprise Visibility","Defense Leadership Context"],
        executiveInsight: "Visibility is only valuable when the underlying operation is trustworthy."
    },

    "asc": {
        role: "ENTERPRISE GOVERNANCE STAKEHOLDER",
        theme: "Governed Standardization",
        title: "U.S. Army Sustainment Command",
        location: "Rock Island Arsenal · Illinois",
        relationship: "Army sustainment integration and enterprise logistics governance",
        businessPressure: "ASC must convert diverse installation-level logistics requirements into standardized, auditable, cost-conscious sustainment outcomes while preserving responsiveness to local mission demand.",
        stakeholderExpectation: "Local programs should execute predictably, produce comparable performance information, survive contractor turnover, and remain aligned to standardized EAGLE requirements.",
        leadershipCommitment: "Standardize the control system without flattening the mission.",
        executiveContribution: "At the Camp Bull Simons operating level, Michael made the local operation more governable through stable processes, usable data, audit readiness, documented procedures, recurring reporting, and continuity across changes in contractor ownership.",
        riskReduction: [
            "Standardized SOPs and repeatable operating controls",
            "Maintained EESOH-MIS data stewardship",
            "Produced recurring performance and management information",
            "Preserved inventory and accountability controls",
            "Reduced disruption during contractor and governance transitions"
        ],
        enterpriseValue: "Reliable local execution gives higher echelons confidence that standardized contract requirements translate into actual field performance without constant intervention.",
        organizationalOutcome: "A local mission remains operationally stable even when the enterprise changes contracts, administrators, or delivery organizations.",
        enterpriseInterface: ["Army Sustainment Command","406th AFSB","Logistics Readiness Center","Camp Bull Simons Program"],
        executiveInsight: "Standardization works when the field can execute it without losing responsiveness."
    },

    "406-afsb": {
        role: "PORTFOLIO GOVERNANCE STAKEHOLDER",
        theme: "Governance Transfer",
        title: "406th Army Field Support Brigade",
        location: "Fort Bragg · North Carolina",
        relationship: "Regional portfolio governance and contracted-service oversight",
        businessPressure: "Incoming oversight required rapid understanding of an established operating environment, its stakeholder relationships, performance expectations, and operational risk.",
        stakeholderExpectation: "Receive a mature program requiring leadership and informed oversight rather than reconstruction of the operating picture.",
        leadershipCommitment: "Transfer understanding — not merely responsibility.",
        executiveContribution: "Preserved and translated institutional knowledge across the governance transition, providing operational context, stakeholder awareness, process continuity, and an established control environment for incoming leadership.",
        riskReduction: [
            "Reduced institutional-knowledge loss during governance transition",
            "Preserved stakeholder and operating context for incoming oversight",
            "Limited disruption caused by changing organizational ownership",
            "Maintained visibility into established controls and performance",
            "Reduced the need to rediscover mature operating relationships"
        ],
        enterpriseValue: "Incoming governance inherited an established operating system with retained organizational context instead of rebuilding understanding from the ground up.",
        organizationalOutcome: "Oversight changed faster than organizational understanding had to.",
        enterpriseInterface: ["Army Sustainment Command","406th AFSB","Logistics Readiness Center","Camp Bull Simons Program"],
        executiveInsight: "Great transitions transfer understanding."
    },

    "lrc-rucker": {
        role: "PROGRAM ADMINISTRATION STAKEHOLDER",
        theme: "Control Through Evidence",
        title: "Logistics Readiness Center",
        location: "Fort Rucker · Alabama",
        relationship: "Installation logistics program administration and EAGLE contract-management interface",
        businessPressure: "LRC leadership must reconcile standardized contract requirements with local mission realities, funding, staffing, property accountability, supply demand, and customer priorities.",
        stakeholderExpectation: "The contractor must meet the PWS, produce defensible performance evidence, manage resources within controls, and surface problems before they become mission or contract failures.",
        leadershipCommitment: "Make control visible before oversight has to ask for it.",
        executiveContribution: "Michael's operating contribution included recurring PMR, ODC, GFP, and ITD reporting; purchase and material controls; SOP ownership; system administration; customer issue resolution; and day-to-day evidence that the program remained controlled.",
        riskReduction: [
            "Surfaced shortages and denials before they became mission issues",
            "Identified shelf-life and inventory exposure early",
            "Maintained property and procurement visibility",
            "Reduced compliance and data-error risk",
            "Provided recurring evidence of program control"
        ],
        enterpriseValue: "Daily hazardous-material work becomes administratively visible and contract-manageable instead of remaining opaque local activity.",
        organizationalOutcome: "Program administrators receive evidence of control rather than having to infer control from activity.",
        enterpriseInterface: ["406th AFSB","Logistics Readiness Center","Contract Delivery Organizations","Camp Bull Simons Program"],
        executiveInsight: "Good governance does not chase activity; it receives evidence."
    },

    "96-lrs": {
        role: "CROSS-FUNCTIONAL ASSURANCE STAKEHOLDER",
        theme: "Joint-Service Interface Control",
        title: "96th Logistics Readiness Squadron",
        location: "Eglin Air Force Base · Florida",
        relationship: "Host-installation logistics, hazardous-material, supply, and assurance interface",
        businessPressure: "A host installation must allow tenant missions to operate at speed while ensuring local logistics, hazardous-material, safety, environmental, and information-control rules remain coherent across multiple organizations.",
        stakeholderExpectation: "Tenant operations should fit the installation control environment, maintain accurate authorizations and records, respond cleanly to inspections, and avoid creating safety, environmental, or supply-chain exposure for the host.",
        leadershipCommitment: "Translate requirements at the interface instead of forcing the customer to navigate them.",
        executiveContribution: "Michael connected Army mission demand to Air Force installation controls through EESOH-MIS, AUL and SDS administration, hazardous-material authorization, audit support, inventory discipline, and day-to-day cross-organizational coordination.",
        riskReduction: [
            "Screened authorization before material issue",
            "Maintained SDS and AUL governance",
            "Controlled inventory and transaction accuracy",
            "Managed shelf-life and accountability exposure",
            "Sustained inspection and audit readiness"
        ],
        enterpriseValue: "The host installation can support a demanding tenant mission without surrendering installation-wide governance standards.",
        organizationalOutcome: "Joint-service complexity becomes a managed interface rather than an operational friction point.",
        enterpriseInterface: ["96th LRS","EESOH-MIS","Camp Bull Simons Program","7th SFG(A)"],
        executiveInsight: "Complex organizations fail at the seams before they fail at the center."
    },

    "7-sfg": {
        role: "SUPPORTED MISSION STAKEHOLDER",
        theme: "Readiness Without Friction",
        title: "7th Special Forces Group (Airborne)",
        location: "Camp Bull Simons · Eglin AFB · Florida",
        relationship: "Primary supported mission customer for hazardous-material and environmental logistics capability",
        businessPressure: "Special Operations readiness creates volatile, time-sensitive demand across training cycles, deployments, specialized maintenance, controlled products, mission-specific equipment, and changing shop requirements.",
        stakeholderExpectation: "Materials must be available when needed without allowing speed to bypass authorization, safety, environmental, or accountability controls.",
        leadershipCommitment: "Make compliance invisible to the mission without making control invisible to leadership.",
        executiveContribution: "Michael provided a persistent local operating capability translating mission demand into compliant procurement, receipt, storage, authorization, issue, inventory control, and customer support while preserving relationships and institutional knowledge across contractor transitions.",
        riskReduction: [
            "Forecasted and responded to time-sensitive material demand",
            "Used free-issue and reuse practices to reduce avoidable waste",
            "Maintained shelf-life and stock visibility",
            "Validated AUL authorization before issue",
            "Preserved continuity through repeated contractor transitions"
        ],
        enterpriseValue: "Operators spend less time navigating supply and compliance bureaucracy and more time preparing for mission requirements.",
        organizationalOutcome: "The hazardous-material program becomes an enabler of readiness rather than a gate the customer must fight.",
        enterpriseInterface: ["7th SFG(A)","Camp Bull Simons Program","96th LRS","Contract Delivery Network"],
        executiveInsight: "The best support system disappears into mission readiness."
    },

    "camp-bull-simons": {
        role: "OPERATING SYSTEM HUB",
        theme: "Stable Execution Under Growth",
        title: "Camp Bull Simons Program",
        location: "Eglin Air Force Base · Florida",
        relationship: "Local operating hub where mission demand, contractor delivery, host-installation controls, and enterprise information converge",
        businessPressure: "A large, evolving Special Operations campus creates more facilities, customers, controlled products, transactions, interfaces, and compliance exposure while the mission still expects support to remain fast and dependable.",
        stakeholderExpectation: "Absorb growth, contractor changes, new requirements, and recurring operational surges without allowing the control environment to become fragile.",
        leadershipCommitment: "Build the operating system strong enough to survive the next change.",
        executiveContribution: "Across fifteen years, Michael helped establish, mature, standardize, administer, and preserve the local hazardous-material operating system — including procedures, inventory governance, EESOH-MIS, authorization controls, reporting, customer support, facility operations, and transition continuity.",
        riskReduction: [
            "Converted institutional knowledge into durable procedures",
            "Maintained authorization and inventory controls as activity expanded",
            "Preserved customer and stakeholder context across transitions",
            "Sustained audit readiness and environmental discipline",
            "Reduced the risk that organizational change would interrupt mission support"
        ],
        enterpriseValue: "A mature control system allows operational growth without proportional growth in unmanaged risk.",
        organizationalOutcome: "The mission environment changes while the operating system remains dependable.",
        enterpriseInterface: ["Supported Mission","Host Installation","Contract Delivery Network","Enterprise Governance","EESOH-MIS"],
        executiveInsight: "Growth multiplies interfaces faster than it multiplies headcount."
    },

    "one-stop": {
        role: "FOUNDATIONAL DELIVERY STAKEHOLDER",
        theme: "Build the Foundation",
        title: "One Stop Environmental",
        location: "Birmingham · Alabama",
        relationship: "Foundational environmental-services delivery organization during program stand-up and early maturation",
        businessPressure: "A greenfield or early-stage hazardous-material support program must become operational quickly while building compliant processes, customer trust, physical layouts, records, and repeatable work standards from the ground up.",
        stakeholderExpectation: "Create a stable local operation that satisfies the customer and regulator while giving the contractor a defensible performance record.",
        leadershipCommitment: "Build it as if someone else will have to run it tomorrow.",
        executiveContribution: "Project SAGE career records describe Michael as helping establish and mature the Camp Bull Simons hazardous-material operation, authoring foundational procedures, designing layouts, strengthening compliance processes, and converting early operating knowledge into repeatable practice.",
        riskReduction: [
            "Established foundational SOPs",
            "Improved storage and material-flow discipline",
            "Embedded compliance reviews into ordinary work",
            "Created durable operational records",
            "Reduced dependence on informal tribal knowledge"
        ],
        enterpriseValue: "The employer gains a repeatable operating model and institutional knowledge capable of surviving beyond initial mobilization.",
        organizationalOutcome: "A developing program matures into a stable delivery capability.",
        enterpriseInterface: ["One Stop Environmental","Camp Bull Simons Program","Supported Customer","Installation Control Environment"],
        executiveInsight: "The first version of a system should already be designed for continuity."
    },

    "technica": {
        role: "CAPABILITY EXPANSION STAKEHOLDER",
        theme: "Scale Without Losing Control",
        title: "Technica LLC",
        location: "Charleston · South Carolina",
        relationship: "Enterprise logistics delivery partner during program expansion and system modernization",
        businessPressure: "A mature operation entering a larger logistics contractor environment is pressured to standardize, scale reporting, modernize systems, and demonstrate measurable performance rather than rely on local know-how.",
        stakeholderExpectation: "Preserve mission continuity while integrating the site into a broader contractor management system and enterprise logistics discipline.",
        leadershipCommitment: "Modernize the system without destabilizing the mission.",
        executiveContribution: "Internal career records associate the Technica era with expanded hazardous-material program leadership, process modernization, customer coordination, enterprise-system transition work, stronger reporting, and greater operating standardization.",
        riskReduction: [
            "Controlled system and process migration",
            "Preserved SOP discipline during modernization",
            "Expanded performance and management visibility",
            "Maintained inventory and compliance controls",
            "Reduced service-disruption and data-loss risk"
        ],
        enterpriseValue: "The local operation becomes easier to manage as part of a wider logistics portfolio and provides evidence of consistent contract execution.",
        organizationalOutcome: "Capability expands without sacrificing continuity.",
        enterpriseInterface: ["Technica","Army Logistics Enterprise","Camp Bull Simons Program","EESOH-MIS"],
        executiveInsight: "Modernization succeeds when capability grows faster than friction."
    },

    "red-river": {
        role: "PRIME DELIVERY STAKEHOLDER",
        theme: "Govern the Distance",
        title: "Red River Science & Technology",
        location: "Fort Sill · Oklahoma",
        relationship: "Prime contractor carrying contractual accountability for hazardous-material supply operations while local execution was performed through a delivery partner",
        businessPressure: "As prime, Red River carried contractual accountability for an HMSO requirement while relying on delivery partners and site execution to satisfy performance, quality, cost, compliance, and customer expectations.",
        stakeholderExpectation: "The subcontracted site must behave like a controlled extension of the prime: reliable execution, clean reporting, no surprises, and evidence that contractual outcomes are being achieved.",
        leadershipCommitment: "Distance cannot become a loss of control.",
        executiveContribution: "Project SAGE records frame Michael as the local operational authority and primary liaison during the TLC subcontract / Red River prime era, maintaining customer support, reporting, property, procurement, compliance controls, and continuity of the operating picture.",
        riskReduction: [
            "Maintained PMR, ODC, GFP, and performance reporting",
            "Preserved audit and inspection readiness",
            "Maintained SOP and compliance discipline",
            "Escalated issues through clear stakeholder channels",
            "Reduced prime-level exposure to local execution surprises"
        ],
        enterpriseValue: "The prime receives predictable field execution and credible operational information despite being organizationally removed from the day-to-day site.",
        organizationalOutcome: "Subcontracted delivery remains governable from the prime level.",
        enterpriseInterface: ["Red River Science & Technology","The Logistics Company","Camp Bull Simons Program","Government Customer"],
        executiveInsight: "Distributed delivery only works when accountability remains connected."
    },

    "tlc": {
        role: "DIRECT DELIVERY STAKEHOLDER",
        theme: "Interface Leadership",
        title: "The Logistics Company",
        location: "Fayetteville · North Carolina",
        relationship: "Direct delivery organization executing local logistics and environmental requirements beneath the Red River prime relationship",
        businessPressure: "A subcontractor executing beneath a prime must satisfy two audiences simultaneously: the prime's contractual controls and the government's operational customer, while maintaining workforce, supply, compliance, and reporting performance.",
        stakeholderExpectation: "Deliver locally without creating communication gaps, duplicated direction, hidden cost, or ambiguity about who owns an issue.",
        leadershipCommitment: "Absorb organizational complexity before it reaches the customer.",
        executiveContribution: "Michael's role is best expressed as interface leadership: translating customer demand into site execution while furnishing the prime/subcontract chain with operational data, compliance confidence, accountable property and procurement controls, and continuity.",
        riskReduction: [
            "Maintained clear escalation paths",
            "Preserved documented operating processes",
            "Produced recurring management and contract reports",
            "Sustained direct customer relationship management",
            "Prevented issues from falling between prime and subcontract boundaries"
        ],
        enterpriseValue: "The delivery chain works as one operating system even though commercial accountability is split across companies.",
        organizationalOutcome: "Prime/subcontract complexity is absorbed locally instead of being passed to the customer.",
        enterpriseInterface: ["Red River Science & Technology","The Logistics Company","Camp Bull Simons Program","Supported Customer"],
        executiveInsight: "The customer should never have to manage the seams between contractors."
    },

    "chenega-bls": {
        role: "CURRENT PRIME DELIVERY STAKEHOLDER",
        theme: "Transition Into Control",
        title: "Chenega Base & Logistics Services",
        location: "San Antonio · Texas",
        relationship: "Current prime delivery organization assuming responsibility for an established hazardous-material operating environment",
        businessPressure: "A new prime absorbing a mature remote or satellite operation must align labor categories, staffing, systems, reporting, and PWS requirements without losing the institutional knowledge embedded in the incumbent site.",
        stakeholderExpectation: "Assume contractual responsibility quickly, map the actual work to the contract structure, preserve mission continuity, and avoid classification, staffing, compliance, or systems mismatches during mobilization.",
        leadershipCommitment: "Transition the operating reality — not just the contract paperwork.",
        executiveContribution: "Project SAGE's 2026 records show Michael carrying historical program knowledge, EESOH-MIS administration, established controls, documented Issue Point Manager responsibilities, SOP continuity, and stakeholder context into the Chenega transition.",
        riskReduction: [
            "Mapped actual duties against proposed contract structure",
            "Preserved SOPs and continuity records",
            "Maintained system-access and operational knowledge",
            "Raised structural mismatches early",
            "Reduced mission, labor, compliance, and transition risk"
        ],
        enterpriseValue: "The incoming prime gains a faster understanding of the operating reality and can make staffing and control decisions with better evidence.",
        organizationalOutcome: "The transition exposes and resolves the difference between contract templates and the actual operating system on the ground.",
        enterpriseInterface: ["Chenega Corporation","Chenega Base & Logistics Services","406th AFSB / LRC","Camp Bull Simons Program"],
        executiveInsight: "A transition is successful when the new organization inherits the truth."
    },

    "chenega-corporation": {
        role: "PARENT ENTERPRISE STAKEHOLDER",
        theme: "Enterprise Backing",
        title: "Chenega Corporation",
        location: "Anchorage · Alaska",
        relationship: "Parent-enterprise structure behind Chenega Base & Logistics Services and the current delivery environment",
        businessPressure: "A parent enterprise must translate corporate governance, risk tolerance, resources, and performance expectations through operating companies that execute geographically distributed federal missions.",
        stakeholderExpectation: "Operating subsidiaries should deliver compliant, controlled, customer-trusted performance while escalating material risk and preserving the parent organization's reputation and contractual credibility.",
        leadershipCommitment: "Local execution should strengthen enterprise confidence, not consume it.",
        executiveContribution: "Michael's contribution is indirect but operationally relevant: maintaining a stable, documented, auditable local capability that gives the operating company a clearer basis for reporting performance, risk, staffing needs, and continuity into the broader enterprise.",
        riskReduction: [
            "Reduced local operating ambiguity",
            "Preserved documentation and institutional knowledge",
            "Maintained compliance and audit readiness",
            "Improved visibility into transition and staffing risk",
            "Supported consistent delivery beneath the parent-enterprise structure"
        ],
        enterpriseValue: "A governed local program allows the operating company and parent enterprise to manage performance with evidence rather than exception-driven discovery.",
        organizationalOutcome: "Corporate scale is supported by local operating discipline.",
        enterpriseInterface: ["Chenega Corporation","Chenega Base & Logistics Services","Federal Contract Environment","Camp Bull Simons Program"],
        executiveInsight: "Enterprise reputation is built one controlled operating environment at a time."
    },

    "eesoh-mis": {
        role: "ENTERPRISE INFORMATION STAKEHOLDER",
        theme: "Information as Control",
        title: "EESOH-MIS",
        location: "Air Force Enterprise Platform",
        relationship: "Enterprise hazardous-material, hazardous-waste, authorization, inventory, and environmental-information control system",
        businessPressure: "The enterprise needs one defensible information layer connecting authorization, inventory, SDS data, material use, waste, and environmental reporting. Bad data can create real-world compliance and mission consequences.",
        stakeholderExpectation: "Transactions should be traceable, users and shops correctly authorized, SDS and AUL records current, inventory reconcilable, and reporting sufficiently accurate for local and enterprise decisions.",
        leadershipCommitment: "Treat the system of record as part of the operation, not clerical overhead.",
        executiveContribution: "Michael's career materials describe active administration of EESOH-MIS, SDS catalogs, Authorized User Lists, user profiles, transaction controls, inventory records, and ad-hoc reporting supporting both day-to-day execution and management visibility.",
        riskReduction: [
            "Reduced unauthorized material issuance",
            "Improved transaction and master-data integrity",
            "Maintained complete audit trails",
            "Reduced inventory mismatch and reconciliation risk",
            "Improved management and compliance visibility"
        ],
        enterpriseValue: "Physical material movement becomes governed enterprise information supporting compliance, performance measurement, and decision-making.",
        organizationalOutcome: "The database functions as part of the operating control system rather than administrative overhead.",
        enterpriseInterface: ["Camp Bull Simons Program","96th LRS / HazMat Controls","Authorized Users and Shops","Enterprise Information Visibility"],
        executiveInsight: "If the data cannot be trusted, the operation cannot be governed."
    }

};

const labelOffsets = {

    "pentagon":{
        x: 102,
        y:-52,
        align:"end"
    },

    "asc":{
        x:-46,
        y:-52,
        align:"end"
    },

    "406-afsb":{
        x:26,
        y:-64,
        align:"start"
    },

    "lrc-rucker":{
        x:-60,
        y:54,
        align:"end"
    },

    "96-lrs":{
        x:58,
        y:72,
        align:"start"
    },

    "7-sfg":{
        x:62,
        y:20,
        align:"start"
    },

    "camp-bull-simons":{
        x:-20,
        y:-34,
        align:"end"
    },

   "eesoh-mis":{
    x:52,
    y:72,
    align:"end"
},

    "one-stop":{
        x:-54,
        y:-45,
        align:"end"
    },

    "technica":{
        x:22,
        y:48,
        align:"start"
    },

    "red-river":{
        x:-55,
        y:-42,
        align:"end"
    },

    "tlc":{
        x:158,
        y:18,
        align:"end"
    },

    "chenega-bls":{
        x:-88,
        y:-64,
        align:"start"
    },

    "chenega-corporation":{
        x:34,
        y:-18,
        align:"start"
    }

};

    const nodeStateFips = {

        "pentagon":"51",

        "asc":"17",

        "406-afsb":"37",

        "lrc-rucker":"01",

        "96-lrs":"12",

        "7-sfg":"12",

        "camp-bull-simons":"12",

        "one-stop":"01",

        "technica":"45",

        "red-river":"40",

        "tlc":"37",

        "chenega-bls":"48",

        "chenega-corporation":"02",

        "eesoh-mis":"01"

    };

    try{

        setMapStatus(
            "Loading United States operating environment"
        );

        const [

            d3,

            topojson

        ] = await Promise.all([

            import(
                "https://cdn.jsdelivr.net/npm/d3@7.9.0/+esm"
            ),

            import(
                "https://cdn.jsdelivr.net/npm/topojson-client@3.1.0/+esm"
            )

        ]);

        const atlasResponse = await fetch(

            "https://cdn.jsdelivr.net/npm/us-atlas@3.0.1/states-albers-10m.json"

        );

        if(!atlasResponse.ok){

            throw new Error(

                "United States map data could not be loaded."

            );

        }

        const atlas = await atlasResponse.json();

        const nation = topojson.feature(

            atlas,

            atlas.objects.nation

        );

        const states = topojson.feature(

            atlas,

            atlas.objects.states

        );

        const projection = d3.geoAlbersUsa()

            .scale(1300)

            .translate([487.5,305]);

        const pathGenerator = d3.geoPath();

        const nodes = [

            ...section.querySelectorAll(".on-map-record")

        ].map(record=>{

            const longitude =
                Number(record.dataset.nodeLongitude);

            const latitude =
                Number(record.dataset.nodeLatitude);

            const projected =
                projection([longitude,latitude]);

            return {

                id:
                    record.dataset.nodeId,

                groups:
                    record.dataset.nodeGroup
                        .split(/\s+/)
                        .filter(Boolean),

                title:
                    record.dataset.nodeTitle,

                eyebrow:
                    record.dataset.nodeEyebrow,

                location:
                    record.dataset.nodeLocation,

                detail:
                    record.dataset.nodeDetail,

                priority:
                    record.dataset.nodePriority || "secondary",

                latitude,

                longitude,

                x:
                    projected
                        ? projected[0]
                        : null,

                y:
                    projected
                        ? projected[1]
                        : null,

                stateFips:
                    nodeStateFips[
                        record.dataset.nodeId
                    ] || null,

                record

            };

        }).filter(node=>{

            if(

                !Number.isFinite(node.x) ||
                !Number.isFinite(node.y)

            ){

                console.warn(

                    "Map projection failed for:",

                    node.id

                );

                return false;

            }

            return true;

        });

        const nodeLookup = new Map(

            nodes.map(node=>[node.id,node])

        );

        const routes = [

            ...section.querySelectorAll(
                ".on-route-registry span"
            )

        ].map((record,index)=>{

            return {

                id:`network-route-${index}`,

                from:
                    record.dataset.routeFrom,

                to:
                    record.dataset.routeTo,

                type:
                    record.dataset.routeType,

                label:
                    record.dataset.routeLabel,

                record

            };

        }).filter(route=>{

            return (

                nodeLookup.has(route.from) &&
                nodeLookup.has(route.to)

            );

        });

drawNation();

drawStates();

drawRoutes();

drawNodes();

drawLabels();

drawSignals();

          initializeFilters();

          initializeMapKeyboardControls();

          initializeBriefingSequence();

          networkState.initialized = true;

         frame.classList.add("is-online");

          setMapStatus(
           "Operational theater loaded"

         );

        function drawNation(){

            nationLayer.innerHTML = "";

            const path = createSvgElement("path");

            path.setAttribute(
                "class",
                "on-map-nation"
            );

            path.setAttribute(
                "d",
                pathGenerator(nation)
            );

            nationLayer.appendChild(path);

        }

        function drawStates(){

            stateLayer.innerHTML = "";

            const activeStateFips = new Set(

                nodes
                    .map(node=>node.stateFips)
                    .filter(Boolean)

            );

            states.features.forEach(state=>{

                const statePath =
                    createSvgElement("path");

                const fips =
                    String(state.id).padStart(2,"0");

                statePath.setAttribute(

                    "class",

                    activeStateFips.has(fips)

                        ? "on-map-state has-network-node"

                        : "on-map-state"

                );

                statePath.setAttribute(
                    "data-state-fips",
                    fips
                );

                statePath.setAttribute(
                    "d",
                    pathGenerator(state)
                );

                stateLayer.appendChild(
                    statePath
                );

            });

        }

        function drawRoutes(){

            routeLayer.innerHTML = "";

            routes.forEach((route,index)=>{

                const source =
                    nodeLookup.get(route.from);

                const target =
                    nodeLookup.get(route.to);

                const path =
                    createSvgElement("path");

                path.setAttribute(

                    "id",

                    route.id

                );

                path.setAttribute(

                    "class",

                    [
                        "on-map-route",
                        `route-${route.type}`
                    ].join(" ")

                );

                path.setAttribute(

                    "data-route-from",

                    route.from

                );

                path.setAttribute(

                    "data-route-to",

                    route.to

                );

                path.setAttribute(

                    "data-route-type",

                    route.type

                );

                path.setAttribute(

                    "data-route-label",

                    route.label

                );

                path.setAttribute(

                    "d",

                    createRoutePath(
                        source,
                        target,
                        index,
                        route.type
                    )

                );

                routeLayer.appendChild(path);

                route.pathElement = path;

            });

        }

        function drawSignals(){

            signalLayer.innerHTML = "";

            routes.forEach(route=>{

                const signal =
                    createSvgElement("path");

                signal.setAttribute(

                    "class",

                    [
                        "on-map-signal",
                        `route-${route.type}`
                    ].join(" ")

                );

                signal.setAttribute(

                    "data-route-from",

                    route.from

                );

                signal.setAttribute(

                    "data-route-to",

                    route.to

                );

                signal.setAttribute(

                    "data-route-type",

                    route.type

                );

                signal.setAttribute(

                    "d",

                    route.pathElement.getAttribute("d")

                );

                signalLayer.appendChild(signal);

                route.signalElement = signal;

            });

        }

        function drawNodes(){

            nodeLayer.innerHTML = "";

            nodes.forEach(node=>{

                const group =
                    createSvgElement("g");

                const category =
                    getPrimaryNodeCategory(node);

                group.setAttribute(

                    "class",

                    [

                        "on-map-node-group",

                        `node-${category}`,

                        node.priority === "hub"
                            ? "is-hub"
                            : ""

                    ].filter(Boolean).join(" ")

                );

                group.setAttribute(

                    "data-node-id",

                    node.id

                );

                group.setAttribute(
                 "data-node-category",
                 category
                 );

                group.setAttribute(

                    "transform",

                    `translate(${node.x},${node.y})`

                );

                group.setAttribute(
                    "role",
                    "button"
                );

                group.setAttribute(
                    "tabindex",
                    "0"
                );

                group.setAttribute(

                    "aria-label",

                    `${node.title}, ${node.location}`

                );

                const liftPlatform =
                    createSvgElement("g");

                liftPlatform.setAttribute(

                    "class",

                    "on-map-node-platform"

                );

                const halo =
                    createSvgElement("circle");

                halo.setAttribute(

                    "class",

                    "on-map-node-halo"

                );

                halo.setAttribute(

                    "r",

                    node.priority === "hub"
                        ? "18"
                        : "12"

                );

                const ring =
                    createSvgElement("circle");

                ring.setAttribute(

                    "class",

                    "on-map-node-ring"

                );

                ring.setAttribute(

                    "r",

                    node.priority === "hub"
                        ? "8"
                        : "6"

                );

                const core =
                    createSvgElement("circle");

                core.setAttribute(

                    "class",

                    "on-map-node-core"

                );

                core.setAttribute(

                    "r",

                    node.priority === "hub"
                        ? "3.8"
                        : "2.8"

                );

                liftPlatform.append(
                    halo,
                    ring,
                    core
                );

                group.appendChild(
                    liftPlatform
                );

                group.addEventListener(

                    "mouseenter",

                    ()=>focusNode(node.id)

                );

                group.addEventListener(

                    "mouseleave",

                    ()=>handlePointerExit()

                );

                group.addEventListener(

                    "click",

                    ()=>togglePinnedNode(node.id)

                );

                group.addEventListener(

                    "keydown",

                    event=>{

                        if(

                            event.key === "Enter" ||
                            event.key === " "

                        ){

                            event.preventDefault();

                            togglePinnedNode(node.id);

                        }

                        if(event.key === "Escape"){

                            clearPinnedNode();

                        }

                    }

                );

                nodeLayer.appendChild(group);

                node.groupElement = group;

                node.platformElement =
                    liftPlatform;

            });

        }

        function drawLabels(){

            labelLayer.innerHTML = "";

            nodes.forEach(node=>{

                const offset =

                    labelOffsets[node.id] ||

                    {
                        x:24,
                        y:-28,
                        align:"start"
                    };

                const group =
                    createSvgElement("g");

                group.setAttribute(

                    "class",

                    "on-map-label-group"

                );

                group.setAttribute(

                    "data-node-id",

                    node.id

                );

                group.setAttribute(
                    "role",
                    "button"
                );

                group.setAttribute(
                    "tabindex",
                    "0"
                );

                const panelWidth =
    getLabelWidth(
        shortenLabelTitle(node.title)
    );

                const panelHeight = 42;

                const panelX =

                    offset.align === "end"

                        ? node.x + offset.x - panelWidth

                        : node.x + offset.x;

                const panelY =

                    node.y + offset.y;

                const lineEndX =

                    offset.align === "end"

                        ? panelX + panelWidth

                        : panelX;

                const lineEndY =

                    panelY + panelHeight / 2;

                const leader =
                    createSvgElement("line");

                leader.setAttribute(

                    "class",

                    "on-map-label-leader"

                );

                leader.setAttribute(
                    "x1",
                    node.x
                );

                leader.setAttribute(
                    "y1",
                    node.y
                );

                leader.setAttribute(
                    "x2",
                    lineEndX
                );

                leader.setAttribute(
                    "y2",
                    lineEndY
                );

                const panel =
                    createSvgElement("rect");

                panel.setAttribute(

                    "class",

                    "on-map-label-panel"

                );

                panel.setAttribute(
                    "x",
                    panelX
                );

                panel.setAttribute(
                    "y",
                    panelY
                );

                panel.setAttribute(
                    "width",
                    panelWidth
                );

                panel.setAttribute(
                    "height",
                    panelHeight
                );

                const title =
                    createSvgElement("text");

                title.setAttribute(

                    "class",

                    "on-map-label-title"

                );

                title.setAttribute(

                    "x",

                    panelX + 8

                );

                title.setAttribute(

                    "y",

                    panelY + 16

                );

                title.textContent =
                    shortenLabelTitle(node.title);

                const location =
                    createSvgElement("text");

                location.setAttribute(

                    "class",

                    "on-map-label-location"

                );

                location.setAttribute(

                    "x",

                    panelX + 8

                );

                location.setAttribute(

                    "y",

                    panelY + 32

                );

                location.textContent =
                    shortenLocation(node.location);

                group.append(

                    leader,
                    panel,
                    title,
                    location

                );

                group.addEventListener(

                    "mouseenter",

                    ()=>focusNode(node.id)

                );

                group.addEventListener(

                    "mouseleave",

                    ()=>handlePointerExit()

                );

                group.addEventListener(

                    "click",

                    ()=>togglePinnedNode(node.id)

                );

                group.addEventListener(

                    "keydown",

                    event=>{

                        if(

                            event.key === "Enter" ||
                            event.key === " "

                        ){

                            event.preventDefault();

                            togglePinnedNode(node.id);

                        }

                        if(event.key === "Escape"){

                            clearPinnedNode();

                        }

                    }

                );

                labelLayer.appendChild(group);

                node.labelElement = group;

            });

        }

        function createRoutePath(

            source,
            target,
            index,
            type

        ){

            const dx =
                target.x - source.x;

            const dy =
                target.y - source.y;

            const distance =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );

            if(distance < 34){

                const bend =
                    type === "visibility"
                        ? 30
                        : 20;

                return [

                    `M ${source.x} ${source.y}`,

                    `C ${source.x + bend} ${source.y - bend}`,

                    `${target.x + bend} ${target.y + bend}`,

                    `${target.x} ${target.y}`

                ].join(" ");

            }

            const midpointX =
                (source.x + target.x) / 2;

            const midpointY =
                (source.y + target.y) / 2;

            const normalX =
                -dy / distance;

            const normalY =
                dx / distance;

            const baseCurve =

                type === "visibility"
                    ? 55
                    : type === "authority"
                        ? 34
                        : type === "contract"
                            ? 25
                            : 18;

            const direction =

                index % 2 === 0
                    ? 1
                    : -1;

            const curve =

                Math.min(
                    baseCurve,
                    distance * .18
                ) * direction;

            const controlX =
                midpointX + normalX * curve;

            const controlY =
                midpointY + normalY * curve;

            return [

                `M ${source.x} ${source.y}`,

                `Q ${controlX} ${controlY}`,

                `${target.x} ${target.y}`

            ].join(" ");

        }

        function initializeFilters(){

            filterButtons.forEach(button=>{

                button.addEventListener("click",async()=>{

                    const filter =
                        button.dataset.networkFilter;

                    networkState.activeFilter =
                        filter;

                    frame.dataset.enterpriseMode = filter;

                    networkState.pinnedNode =
                        null;

                    networkState.traceRunId += 1;

                    lowerStakeholder();

                    filterButtons.forEach(item=>{

                        item.classList.toggle(

                            "is-active",

                            item === button

                        );

                    });

                    await applyFilter(
                        filter,
                        { animate:true }
                    );

                });

            });

        }

        async function applyFilter(

            filter,
            options = {}

        ){

            const animate =
                options.animate === true;

             frame.dataset.enterpriseMode = filter;    

            const runId =
                ++networkState.traceRunId;

            clearMapFocusClasses();

            if(filter === "all"){

                frame.classList.remove(
                    "has-network-focus",
                    "has-pathway-trace"
                );

                nodes.forEach(node=>{

                    activateNodeVisual(
                        node,
                        true
                    );

                });

                routes.forEach(route=>{

                    activateRouteVisual(
                        route,
                        true,
                        false
                    );

                });

                resetDetailPanel();

                return;

            }

            const pathway =
                enterprisePathways[filter];

            if(!pathway){

                renderLegacyFilter(filter);

                return;

            }

            frame.classList.add(
                "has-network-focus",
                "has-pathway-trace"
            );

            nodes.forEach(node=>{

                activateNodeVisual(
                    node,
                    false
                );

            });

            routes.forEach(route=>{

                activateRouteVisual(
                    route,
                    false,
                    false
                );

            });

            updateDetailPanel(pathway);

            if(!animate){

                renderPathwayStatic(
                    pathway,
                    filter
                );

                return;

            }

            setMapStatus(
                `Mapping ${pathway.title}`
            );

            await runEnterprisePathway(
                pathway,
                filter,
                runId
            );

            if(runId !== networkState.traceRunId){

                return;

            }

            setMapStatus(
                `${pathway.title} mapped`
            );

        }

        async function runEnterprisePathway(

            pathway,
            routeType,
            runId

        ){

            const activatedStates =
                new Set();

            for(
                let pathIndex = 0;
                pathIndex < pathway.paths.length;
                pathIndex += 1
            ){

                const path =
                    pathway.paths[pathIndex];

                for(
                    let stepIndex = 0;
                    stepIndex < path.length;
                    stepIndex += 1
                ){

                    if(runId !== networkState.traceRunId){

                        return;

                    }

                    const nodeId =
                        path[stepIndex];

                    const node =
                        nodeLookup.get(nodeId);

                    if(!node){

                        continue;

                    }

                    activateNodeVisual(
                        node,
                        true
                    );

                    node.groupElement?.classList.add(
                        "is-pathway-active"
                    );

                    node.labelElement?.classList.add(
                        "is-pathway-active"
                    );

                    activateTraceState(
                        node,
                        {
                            isOrigin:stepIndex === 0,
                            isDestination:
                                stepIndex === path.length - 1,
                            activatedStates
                        }
                    );

                    if(stepIndex > 0){

                        const previousNodeId =
                            path[stepIndex - 1];

                        activateRouteBetween(
                            previousNodeId,
                            nodeId,
                            routeType
                        );

                    }

                    await pathwayWait(210);

                }

                if(pathIndex < pathway.paths.length - 1){

                    await pathwayWait(150);

                }

            }

        }

        function renderPathwayStatic(

            pathway,
            routeType

        ){

            const activeNodeIds =
                new Set();

            const activeStates =
                new Set();

            pathway.paths.forEach(path=>{

                path.forEach((nodeId,index)=>{

                    const node =
                        nodeLookup.get(nodeId);

                    if(!node){

                        return;

                    }

                    activeNodeIds.add(nodeId);

                    activateTraceState(
                        node,
                        {
                            isOrigin:index === 0,
                            isDestination:index === path.length - 1,
                            activatedStates:activeStates,
                            ping:false
                        }
                    );

                    if(index > 0){

                        activateRouteBetween(
                            path[index - 1],
                            nodeId,
                            routeType
                        );

                    }

                });

            });

            nodes.forEach(node=>{

                activateNodeVisual(
                    node,
                    activeNodeIds.has(node.id)
                );

            });

        }

        function activateRouteBetween(

            fromId,
            toId,
            routeType

        ){

            const route =
                routes.find(item=>{

                    const samePair =
                        (
                            item.from === fromId &&
                            item.to === toId
                        ) ||
                        (
                            item.from === toId &&
                            item.to === fromId
                        );

                    return (
                        samePair &&
                        item.type === routeType
                    );

                });

            if(!route){

                console.warn(
                    "TOP pathway route missing:",
                    routeType,
                    fromId,
                    toId
                );

                return;

            }

            activateRouteVisual(
                route,
                true,
                true
            );

            route.pathElement?.classList.add(
                "is-pathway-active"
            );

            route.signalElement?.classList.add(
                "is-pathway-active"
            );

        }

        function activateTraceState(

            node,
            {
                isOrigin = false,
                isDestination = false,
                activatedStates = new Set(),
                ping = true
            } = {}

        ){

            if(!node?.stateFips){

                return;

            }

            const state =
                stateLayer.querySelector(
                    `[data-state-fips="${node.stateFips}"]`
                );

            if(!state){

                return;

            }

            state.classList.add(
                "is-active",
                "is-trace-active"
            );

            if(isOrigin){

                state.classList.add(
                    "is-trace-origin"
                );

            }

            if(isDestination){

                state.classList.add(
                    "is-trace-destination"
                );

            }

            if(
                ping &&
                !activatedStates.has(node.stateFips)
            ){

                state.classList.remove(
                    "is-trace-ping"
                );

                void state.getBoundingClientRect();

                state.classList.add(
                    "is-trace-ping"
                );

                setTimeout(()=>{

                    state.classList.remove(
                        "is-trace-ping"
                    );

                },720);

            }

            activatedStates.add(
                node.stateFips
            );

        }

        function renderLegacyFilter(filter){

            frame.classList.add(
                "has-network-focus"
            );

            const visibleNodeIds =
                new Set();

            routes.forEach(route=>{

                const active =
                    route.type === filter;

                activateRouteVisual(
                    route,
                    active,
                    active
                );

                if(active){

                    visibleNodeIds.add(route.from);
                    visibleNodeIds.add(route.to);

                }

            });

            nodes.forEach(node=>{

                activateNodeVisual(
                    node,
                    visibleNodeIds.has(node.id) ||
                    node.groups.includes(filter)
                );

            });

            highlightConnectedStates(
                visibleNodeIds
            );

            updateDetailPanel({

                eyebrow:getFilterEyebrow(filter),
                title:getFilterTitle(filter),
                location:"Enterprise Relationship Layer",
                detail:getFilterDescription(filter)

            });

        }

        function pathwayWait(milliseconds){

            return new Promise(resolve=>{

                setTimeout(
                    resolve,
                    milliseconds
                );

            });

        }

        function focusNode(nodeId){

            const node =
                nodeLookup.get(nodeId);

            if(!node) return;

            frame.classList.add(
                "has-network-focus"
            );

            const connectedIds =
                new Set([nodeId]);

            routes.forEach(route=>{

                const connected =

                    route.from === nodeId ||
                    route.to === nodeId;

                activateRouteVisual(

                    route,

                    connected,

                    connected

                );

                if(connected){

                    connectedIds.add(
                        route.from
                    );

                    connectedIds.add(
                        route.to
                    );

                }

            });

            nodes.forEach(item=>{

                activateNodeVisual(

                    item,

                    connectedIds.has(item.id)

                );

            });

            highlightConnectedStates(
                connectedIds
            );

            updateDetailPanel(node);

        }

        function elevateStakeholder(nodeId){

            const selected =
                nodeLookup.get(nodeId);

            if(!selected){

                return;

            }

            nodes.forEach(node=>{

                node.groupElement?.classList.remove(

                    "is-elevated",
                    "is-trace-connected"

                );

                node.labelElement?.classList.remove(
                    "is-elevated"
                );

            });

            frame.classList.add(
                "has-tactical-focus"
            );

            selected.groupElement?.classList.add(
                "is-elevated"
            );

            selected.labelElement?.classList.add(
                "is-elevated"
            );

            const routeType =

                networkState.activeFilter === "all"

                    ? null

                    : networkState.activeFilter;

            const trace =
                getConnectedNetwork(

                    nodeId,
                    routeType

                );

            trace.nodes.forEach(id=>{

                if(id === nodeId){

                    return;

                }

                nodeLookup
                    .get(id)
                    ?.groupElement
                    ?.classList
                    .add(
                        "is-trace-connected"
                    );

            });

            traceNodeNetwork(
                nodeId
            );

        }

        function lowerStakeholder(){

            collapseStakeholderIntelligence();

            frame.classList.remove(
                "has-tactical-focus"
            );

            nodes.forEach(node=>{

                node.groupElement?.classList.remove(

                    "is-elevated",
                    "is-trace-connected"

                );

                node.labelElement?.classList.remove(
                    "is-elevated"
                );

            });

        }

        function togglePinnedNode(nodeId){

            if(

                networkState.pinnedNode === nodeId

            ){

                clearPinnedNode();

                return;

            }

            networkState.pinnedNode =
                nodeId;

            elevateStakeholder(
                nodeId
            );

            deployStakeholderIntelligence(
                nodeId
            );

        }

        function clearPinnedNode(){

            networkState.pinnedNode =
                null;

            lowerStakeholder();

            applyFilter(
                networkState.activeFilter,
                { animate:false }
            );

        }

        function handlePointerExit(){

            if(networkState.pinnedNode){

                elevateStakeholder(
                    networkState.pinnedNode
                );

                return;

            }

            applyFilter(
                networkState.activeFilter,
                { animate:false }
            );

        }

function getConnectedNetwork(

    startingNodeId,
    routeType = null

){

    const visitedNodes =
        new Set([startingNodeId]);

    const visitedRoutes =
        new Set();

    const queue =
        [startingNodeId];

    while(queue.length){

        const currentNode =
            queue.shift();

        routes.forEach(route=>{

            if(

                routeType &&
                routeType !== "all" &&
                route.type !== routeType

            ){

                return;

            }

            const touchesCurrent =

                route.from === currentNode ||
                route.to === currentNode;

            if(!touchesCurrent){

                return;

            }

            visitedRoutes.add(
                route.id
            );

            const nextNode =

                route.from === currentNode

                    ? route.to

                    : route.from;

            if(!visitedNodes.has(nextNode)){

                visitedNodes.add(
                    nextNode
                );

                queue.push(
                    nextNode
                );

            }

        });

    }

    return {

        nodes:
            visitedNodes,

        routes:
            visitedRoutes

    };

}

function traceNodeNetwork(nodeId){

    const node =
        nodeLookup.get(nodeId);

    if(!node) return;

    const routeType =

        networkState.activeFilter === "all"

            ? null

            : networkState.activeFilter;

    const trace =
        getConnectedNetwork(

            nodeId,
            routeType

        );

    frame.classList.add(
        "has-network-focus"
    );

    routes.forEach(route=>{

        const active =
            trace.routes.has(route.id);

        activateRouteVisual(

            route,
            active,
            active

        );

    });

    nodes.forEach(item=>{

        activateNodeVisual(

            item,

            trace.nodes.has(item.id)

        );

    });

    highlightConnectedStates(
        trace.nodes
    );

    updateDetailPanel(node);

}

        function activateNodeVisual(

            node,
            active

        ){

            if(node.groupElement){

                node.groupElement.classList.toggle(

                    "is-active",

                    active

                );

                node.groupElement.classList.toggle(

                    "is-dimmed",

                    !active

                );

            }

            if(node.labelElement){

                node.labelElement.classList.toggle(

                    "is-active",

                    active

                );

                node.labelElement.classList.toggle(

                    "is-dimmed",

                    !active

                );

            }

        }

        function activateRouteVisual(

            route,
            active,
            animate

        ){

            if(route.pathElement){

                route.pathElement.classList.toggle(

                    "is-active",

                    active

                );

                route.pathElement.classList.toggle(

                    "is-dimmed",

                    !active

                );

            }

            if(route.signalElement){

                route.signalElement.classList.toggle(

                    "is-active",

                    active && animate

                );

            }

        }

        function highlightConnectedStates(

            connectedIds

        ){

            const activeFips =
                new Set();

            connectedIds.forEach(id=>{

                const node =
                    nodeLookup.get(id);

                if(node?.stateFips){

                    activeFips.add(
                        node.stateFips
                    );

                }

            });

            stateLayer
                .querySelectorAll(".on-map-state")
                .forEach(state=>{

                    const active =
                        activeFips.has(
                            state.dataset.stateFips
                        );

                    state.classList.toggle(
                        "is-active",
                        active
                    );

                    state.classList.toggle(
                        "is-trace-active",
                        active
                    );

                });

        }

        function clearMapFocusClasses(){

            frame.classList.remove(
                "has-network-focus",
                "has-pathway-trace"
            );

            svg.querySelectorAll(

                ".is-active, .is-dimmed"

            ).forEach(element=>{

                element.classList.remove(

                    "is-active",
                    "is-dimmed"

                );

            });

            stateLayer
                .querySelectorAll(".on-map-state")
                .forEach(state=>{

                    state.classList.remove(
                        "is-active",
                        "is-trace-active",
                        "is-trace-origin",
                        "is-trace-destination",
                        "is-trace-ping"
                    );

                });

            svg.querySelectorAll(
                ".is-pathway-active"
            ).forEach(element=>{

                element.classList.remove(
                    "is-pathway-active"
                );

            });

        }

function deployStakeholderIntelligence(nodeId){

    if(
        !intelligenceSurface ||
        !intelligenceDossier
    ){

        return;

    }

    const node =
        nodeLookup.get(nodeId);

    if(!node){

        return;

    }

    const intelligence =
        stakeholderIntelligence[nodeId];

    if(!intelligence){

        collapseStakeholderIntelligence(false);

        updateDetailPanel(node);

        return;

    }

    section.dataset.topState =
        "investigation";

    intelligenceSurface.dataset.topIntelligence =
        "active";

    intelligenceSurface.classList.add(
        "is-deployed"
    );
frame.classList.add(
    "has-intelligence-deployed"
);

    if(intelligenceState){

        intelligenceState.textContent =
            "ACTIVE";

    }

    if(detailEyebrow){

        detailEyebrow.textContent =
            intelligence.role;

    }

    if(detailTitle){

        detailTitle.textContent =
            intelligence.title;

    }

    if(detailLocation){

        detailLocation.textContent =
            intelligence.location;

    }

    if(detailCopy){

        detailCopy.textContent =
            intelligence.relationship;

    }

    intelligenceDossier.innerHTML = `

        <div class="top-dossier-grid">

            <section class="
                top-dossier-section
                top-dossier-section-theme
            ">

                <div class="top-dossier-label">
                    Leadership Theme
                </div>

                <div class="top-dossier-theme">
                    ${intelligence.theme}
                </div>

            </section>

            <section class="
                top-dossier-section
                top-dossier-section-pressure
            ">

                <div class="top-dossier-label">
                    Business Pressure
                </div>

                <p class="top-dossier-copy">
                    ${intelligence.businessPressure}
                </p>

            </section>

            <section class="
                top-dossier-section
                top-dossier-section-expectation
            ">

                <div class="top-dossier-label">
                    Stakeholder Expectation
                </div>

                <p class="top-dossier-copy">
                    ${intelligence.stakeholderExpectation}
                </p>

            </section>

            <section class="
                top-dossier-section
                top-dossier-section-commitment
            ">

                <div class="top-dossier-label">
                    Leadership Commitment
                </div>

                <p class="
                    top-dossier-copy
                    top-dossier-commitment
                ">
                    ${intelligence.leadershipCommitment}
                </p>

            </section>

            <section class="
                top-dossier-section
                top-dossier-section-contribution
            ">

                <div class="top-dossier-label">
                    Executive Contribution
                </div>

                <p class="top-dossier-copy">
                    ${intelligence.executiveContribution}
                </p>

            </section>

            <section class="
                top-dossier-section
                top-dossier-section-risk
            ">

                <div class="top-dossier-label">
                    Risk Reduction Strategy
                </div>

                <div class="top-dossier-checkpoints">

                    ${intelligence.riskReduction
                        .map(item=>`

                            <div class="
                                top-dossier-checkpoint
                            ">

                                <span
                                    class="
                                        top-dossier-check
                                    "
                                    aria-hidden="true"
                                >
                                    ✓
                                </span>

                                <span>
                                    ${item}
                                </span>

                            </div>

                        `)
                        .join("")
                    }

                </div>

            </section>

            <section class="
                top-dossier-section
                top-dossier-section-value
            ">

                <div class="top-dossier-label">
                    Enterprise Value
                </div>

                <p class="
                    top-dossier-copy
                    top-dossier-value
                ">
                    ${intelligence.enterpriseValue}
                </p>

            </section>

            <section class="
                top-dossier-section
                top-dossier-section-outcome
            ">

                <div class="top-dossier-label">
                    Organizational Outcome
                </div>

                <p class="
                    top-dossier-copy
                    top-dossier-outcome
                ">
                    ${intelligence.organizationalOutcome}
                </p>

            </section>

            <section class="
                top-dossier-section
                top-dossier-section-interface
            ">

                <div class="top-dossier-label">
                    Enterprise Interface
                </div>

                <div class="top-interface-flow">

                    ${intelligence.enterpriseInterface
                        .map((item,index,array)=>`

                            <div class="
                                top-interface-flow-item
                            ">
                                ${item}
                            </div>

                            ${
                                index < array.length - 1
                                    ? `
                                        <div
                                            class="
                                                top-interface-flow-arrow
                                            "
                                            aria-hidden="true"
                                        >
                                            ↓
                                        </div>
                                      `
                                    : ""
                            }

                        `)
                        .join("")
                    }

                </div>

            </section>

            <section class="
                top-dossier-section
                top-dossier-section-insight
            ">

                <div class="top-dossier-label">
                    Executive Insight
                </div>

                <blockquote class="
                    top-dossier-insight
                ">
                    “${intelligence.executiveInsight}”
                </blockquote>

            </section>

        </div>

    `;

    intelligenceDossier.hidden =
        false;

    requestAnimationFrame(()=>{

        intelligenceSurface.classList.add(
            "is-intelligence-active"
        );

        const sections = [

            ...intelligenceDossier.querySelectorAll(
                ".top-dossier-section"
            )

        ];

        sections.forEach((item,index)=>{

            item.style.setProperty(

                "--top-dossier-order",

                index

            );

        });

    });

    setMapStatus(
        `Analyzing ${intelligence.title}`
    );

}

function collapseStakeholderIntelligence(

    restoreStandby = true

){

    if(!intelligenceSurface){

        return;

    }

    section.dataset.topState =
        "standby";

    intelligenceSurface.dataset.topIntelligence =
        "standby";

    intelligenceSurface.classList.remove(

        "is-deployed",

        "is-intelligence-active"

    );
frame.classList.remove(
    "has-intelligence-deployed"
);

    if(intelligenceState){

        intelligenceState.textContent =
            "STANDBY";

    }

    if(intelligenceDossier){

        intelligenceDossier.hidden =
            true;

        intelligenceDossier.innerHTML =
            "";

    }

    if(restoreStandby){

        resetDetailPanel();

        setMapStatus(
            "Enterprise network online"
        );

    }

}

        function updateDetailPanel(data){

            if(detailEyebrow){

                detailEyebrow.textContent =
                    data.eyebrow ||
                    "NETWORK NODE";

            }

            if(detailTitle){

                detailTitle.textContent =
                    data.title ||
                    "Operational Network";

            }

            if(detailLocation){

                detailLocation.textContent =
                    data.location ||
                    "United States";

            }

            if(detailCopy){

                detailCopy.textContent =
                    data.detail ||
                    "";

            }

        }

        function resetDetailPanel(){

            updateDetailPanel(
                defaultDetail
            );

        }

        function initializeMapKeyboardControls(){

            section.addEventListener(

                "keydown",

                event=>{

                    if(event.key === "Escape"){

                        clearPinnedNode();

                    }

                }

            );

        }

function initializeBriefingSequence(){

    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

    const briefingStages = [

        {
            year:"2011",

            mission:"MISSION 01",

            title:"Operational Foundation",

            detail:
                "Dedicated hazardous-material support is established " +
                "for U.S. Army Special Operations at Camp Bull Simons.",

            nodes:[

                "one-stop",

                "lrc-rucker",

                "96-lrs",

                "camp-bull-simons",

                "7-sfg"

            ],

            hold:350
        },

        {
            year:"2016",

            mission:"MISSION 02",

            title:"Enterprise Expansion",

            detail:
                "Program responsibility expands under Technica as " +
                "enterprise governance and environmental-system " +
                "visibility increase.",

            nodes:[

                "technica",

                "asc",

                "eesoh-mis",

                "pentagon"

            ],

            hold:400
        },

        {
            year:"2021",

            mission:"MISSION 03",

            title:"Enterprise Continuity",

            detail:
                "The operating network expands through the Red River " +
                "prime relationship and The Logistics Company while " +
                "program continuity is preserved.",

            nodes:[

                "red-river",

                "tlc"

            ],

            hold:350
        },

        {
            year:"2026",

            mission:"MISSION 04",

            title:"Executive Continuity",

            detail:
                "Chenega assumes program execution as contract oversight " +
                "moves under the 406th Army Field Support Brigade and " +
                "mission continuity is sustained.",

            nodes:[

                "chenega-corporation",

                "chenega-bls",

                "406-afsb"

            ],

            hold:450
        }

    ];

    let briefingStarted = false;

    prepareBriefingState();

    const observer =
        new IntersectionObserver(

            entries=>{

                entries.forEach(entry=>{

                    if(

                        !entry.isIntersecting ||
                        briefingStarted

                    ){

                        return;

                    }

                    briefingStarted = true;

                    observer.disconnect();

                    if(prefersReducedMotion){

                        completeBriefingImmediately();

                        return;

                    }

                    runBriefing();

                });

            },

            {
                threshold:.24
            }

        );

    observer.observe(frame);

    function prepareBriefingState(){

        section.classList.add(
            "is-briefing"
        );

        frame.classList.remove(
            "has-network-focus"
        );

        filterButtons.forEach(button=>{

            button.disabled = true;

        });

        nodes.forEach(node=>{

            if(node.groupElement){

                node.groupElement.classList.add(
                    "briefing-hidden"
                );

                node.groupElement.classList.remove(
                    "is-active",
                    "is-dimmed",
                    "briefing-revealed",
                    "briefing-current"
                );

            }

            if(node.labelElement){

                node.labelElement.classList.add(
                    "briefing-hidden"
                );

                node.labelElement.classList.remove(
                    "is-active",
                    "is-dimmed",
                    "briefing-revealed"
                );

            }

        });

        routes.forEach(route=>{

    if(route.pathElement){

        const routeLength =
            route.pathElement.getTotalLength();

        route.briefingLength =
            routeLength;

        route.briefingRevealed =
            false;

        route.pathElement.style.strokeDasharray =
            `${routeLength}`;

        route.pathElement.style.strokeDashoffset =
            `${routeLength}`;

        route.pathElement.classList.add(
            "briefing-hidden"
        );

        route.pathElement.classList.remove(

            "is-active",
            "is-dimmed",
            "briefing-revealed",
            "briefing-drawing"

        );

    }

    if(route.signalElement){

        route.signalElement.classList.add(
            "briefing-hidden"
        );

        route.signalElement.classList.remove(
            "is-active"
        );

    }

});

        setMapStatus(
            "Initializing enterprise record"
        );

        updateDetailPanel({

            eyebrow:
                "OPERATIONAL HISTORY",

            title:
                "Enterprise Record Initializing",

            location:
                "United States Operating Environment",

            detail:
                "Fifteen years of program relationships " +
                "will assemble chronologically across the network."

        });

    }

    async function runBriefing(){

        await wait(220);

        setMapStatus(
            "Mission history acquired"
        );

        await wait(180);

        for(

            const stage of briefingStages

        ){

            await playBriefingStage(stage);

        }

        await finishBriefing();

    }

    async function playBriefingStage(stage){

        clearCurrentStage();

        setMapStatus(

            `${stage.year} · ${stage.title}`

        );

        updateDetailPanel({

            eyebrow:
                stage.mission,

            title:
                stage.title,

            location:
                stage.year,

            detail:
                stage.detail

        });

     for(

    const nodeId of stage.nodes

){

    await revealBriefingNode(
        nodeId,
        true
    );

    await revealEligibleRoutes();

    await wait(70);

}

await wait(stage.hold);

}

async function revealBriefingNode(

    nodeId,
    current = false

){

    const node =
        nodeLookup.get(nodeId);

    if(!node){

        return;

    }

    if(node.groupElement){

        node.groupElement.classList.remove(
            "briefing-hidden"
        );

        node.groupElement.classList.add(

            "briefing-revealed",
            "briefing-arriving"

        );

        if(current){

            node.groupElement.classList.add(
                "briefing-current"
            );

        }

    }

    await wait(90);

    if(node.labelElement){

        node.labelElement.classList.remove(
            "briefing-hidden"
        );

        node.labelElement.classList.add(

            "briefing-revealed",
            "briefing-arriving"

        );

    }

    await wait(100);

    node.groupElement?.classList.remove(
        "briefing-arriving"
    );

    node.labelElement?.classList.remove(
        "briefing-arriving"
    );

}

async function revealEligibleRoutes(){

    const newlyAvailableRoutes = [];

    routes.forEach(route=>{

        const fromNode =
            nodeLookup.get(route.from);

        const toNode =
            nodeLookup.get(route.to);

        if(

            !fromNode ||
            !toNode ||
            !fromNode.groupElement ||
            !toNode.groupElement ||
            !route.pathElement ||
            route.briefingRevealed

        ){

            return;

        }

        const fromVisible =
            fromNode.groupElement.classList.contains(
                "briefing-revealed"
            );

        const toVisible =
            toNode.groupElement.classList.contains(
                "briefing-revealed"
            );

        if(

            fromVisible &&
            toVisible

        ){

            newlyAvailableRoutes.push(route);

        }

    });

    if(!newlyAvailableRoutes.length){

        return;

    }

    for(const route of newlyAvailableRoutes){

        await drawBriefingRoute(route);

        await wait(35);

    }

}

async function drawBriefingRoute(route){

    if(

        !route.pathElement ||
        route.briefingRevealed

    ){

        return;

    }

    route.briefingRevealed =
        true;

    const path =
        route.pathElement;

    path.classList.remove(
        "briefing-hidden"
    );

    path.classList.add(
        "briefing-drawing"
    );

    path.getBoundingClientRect();

    path.style.strokeDashoffset =
        "0";

    await wait(220);

    path.classList.remove(
        "briefing-drawing"
    );

    path.classList.add(
        "briefing-revealed"
    );

}

    function clearCurrentStage(){

        nodes.forEach(node=>{

            node.groupElement?.classList.remove(
                "briefing-current"
            );

        });

    }

    async function finishBriefing(){

        clearCurrentStage();

        setMapStatus(
            "Verifying enterprise network"
        );

        updateDetailPanel({

            eyebrow:
                "NETWORK ASSESSMENT",

            title:
                "Fifteen Years Integrated",

            location:
                "2011 — 2026",

            detail:
                "Strategic authority, program oversight, " +
                "contractor execution, operational support, " +
                "and enterprise visibility converged into " +
                "one sustained operating network."

        });

        await wait(180);

        section.classList.add(
            "briefing-complete"
        );

        await wait(260);

        setMapStatus(
            "Enterprise network complete"
        );

        updateDetailPanel({

            eyebrow:
                "INTERACTIVE ANALYSIS",

            title:
                "Enterprise Network Online",

            location:
                "Interactive Analysis Available",

            detail:
                "Hover over a location to inspect immediate " +
                "relationships. Select a location or relationship " +
                "layer to trace the network."

        });

        await wait(180);

        unlockInteractiveMap();

    }

    function unlockInteractiveMap(){

        section.classList.remove(
            "is-briefing"
        );

        section.classList.remove(
            "briefing-complete"
        );

        nodes.forEach(node=>{

            node.groupElement?.classList.remove(

                "briefing-hidden",
                "briefing-revealed",
                "briefing-current"

            );

            node.labelElement?.classList.remove(

                "briefing-hidden",
                "briefing-revealed"

            );

        });

     routes.forEach(route=>{

    if(route.pathElement){

        route.pathElement.classList.remove(

            "briefing-hidden",
            "briefing-revealed",
            "briefing-drawing"

        );

        route.pathElement.style.strokeDasharray =
            "";

        route.pathElement.style.strokeDashoffset =
            "";

    }

    route.signalElement?.classList.remove(
        "briefing-hidden"
    );

});

        filterButtons.forEach(button=>{

            button.disabled = false;

        });

        networkState.activeFilter =
            "all";

        networkState.pinnedNode =
            null;

        filterButtons.forEach(button=>{

            button.classList.toggle(

                "is-active",

                button.dataset.networkFilter === "all"

            );

        });

        applyFilter("all");

        setTimeout(()=>{

            setMapReady();

        },250);

    }

    function completeBriefingImmediately(){

        nodes.forEach(node=>{

    if(node.groupElement){

        node.groupElement.classList.remove(
            "briefing-hidden"
        );

        node.groupElement.classList.add(
            "briefing-revealed"
        );

    }

    if(node.labelElement){

        node.labelElement.classList.remove(
            "briefing-hidden"
        );

        node.labelElement.classList.add(
            "briefing-revealed"
        );

    }

});

       routes.forEach(route=>{

    if(route.pathElement){

        route.briefingRevealed =
            true;

        route.pathElement.style.strokeDashoffset =
            "0";

        route.pathElement.classList.remove(
            "briefing-hidden"
        );

        route.pathElement.classList.add(
            "briefing-revealed"
        );

    }

});

        updateDetailPanel({

            eyebrow:
                "INTERACTIVE ANALYSIS",

            title:
                "Enterprise Network Online",

            location:
                "2011 — 2026",

            detail:
                "The complete operating network is available " +
                "for interactive analysis."

        });

        unlockInteractiveMap();

    }

    function wait(milliseconds){

        return new Promise(resolve=>{

            setTimeout(

                resolve,

                milliseconds

            );

        });

    }

}

        function activateScrollSequence(){

            const observer =
                new IntersectionObserver(

                    entries=>{

                        entries.forEach(entry=>{

                            if(!entry.isIntersecting){

                                return;

                            }

                            frame.classList.add(
                                "is-online"
                            );

                            setTimeout(()=>{

                                applyFilter("all");

                            },420);

                            observer.disconnect();

                        });

                    },

                    {
                        threshold:.18
                    }

                );

            observer.observe(frame);

        }

        function getFilterEyebrow(filter){

            const labels = {

                authority:
                    "ENTERPRISE GOVERNANCE",

                governance:
                    "PROGRAM MANAGEMENT",

                contract:
                    "SERVICE DELIVERY",

                operations:
                    "OPERATIONS",

                visibility:
                    "INFORMATION & CONTROL"

            };

            return labels[filter] ||
                "NETWORK STATUS";

        }

        function getFilterTitle(filter){

            const titles = {

                authority:
                    "Enterprise Governance Pathway",

                governance:
                    "Integrated Program Governance",

                contract:
                    "Distributed Delivery Network",

                operations:
                    "Customer Enablement Pathway",

                visibility:
                    "Enterprise Information Pathway"

            };

            return titles[filter] ||
                "Enterprise Network Online";

        }

        function getFilterDescription(filter){

            const descriptions = {

                authority:
                    "Enterprise-level authority connecting strategic direction to the sustainment environment responsible for governed execution.",

                governance:
                    "Portfolio governance, program administration, and host-installation assurance converging on the local operating environment.",

                contract:
                    "Distributed delivery partners, prime relationships, and parent-enterprise structures supporting continuity across provider transitions.",

                operations:
                    "The service relationship connecting the local operating capability to the supported customer.",

                visibility:
                    "The governed information pathway connecting local transactions, authorization controls, reporting, and authorized enterprise visibility."

            };

            return descriptions[filter] ||
                defaultDetail.detail;

        }

        function getPrimaryNodeCategory(node){

            if(node.priority === "hub"){

                return "operations";

            }

            const priority = [

                "authority",

                "visibility",

                "governance",

                "operations",

                "contract"

            ];

            return (

                priority.find(group=>

                    node.groups.includes(group)

                ) ||

                "contract"

            );

        }

        function getLabelWidth(title){

            const estimated =
                title.length * 5.6 + 18;

            return Math.max(

                90,

                Math.min(
                    estimated,
                    190
                )

            );

        }

        function shortenLabelTitle(title){

            const replacements = {

                "U.S. Army Sustainment Command":
                    "ARMY SUSTAINMENT COMMAND",

                "406th Army Field Support Brigade":
                    "406TH AFSB",

                "96th Logistics Readiness Squadron":
                    "96TH LRS",

                "7th Special Forces Group (Airborne)":
                    "7TH SFG(A)",

                "Red River Science & Technology":
                    "RED RIVER Science & Technology",

                "Chenega Base & Logistics Services":
                    "CHENEGA B&LS",

                "Chenega Corporation":
                    "CHENEGA CORPORATION",

                "Camp Bull Simons Program":
                    "CAMP BULL SIMONS",

                "Logistics Readiness Center":
                    "LRC FORT RUCKER"

            };

            const result =
                replacements[title] || title;

            return result
                .toUpperCase()
                .slice(0,31);

        }

        function shortenLocation(location){

            return location

                .replace(
                    "The Pentagon · ",
                    ""
                )

                .replace(
                    "Rock Island Arsenal · ",
                    ""
                )

                .replace(
                    "Eglin Air Force Base · ",
                    "EGLIN AFB · "
                )

                .replace(
                    "Air Force Enterprise Platform",
                    "ENTERPRISE PLATFORM"
                )

                .toUpperCase()

                .slice(0,34);

        }

        function createSvgElement(tag){

            return document.createElementNS(

                "http://www.w3.org/2000/svg",

                tag

            );

        }

        function setMapStatus(message){

            if(!status) return;

            const text =
                status.querySelector(
                    "span:last-child"
                );

            if(text){

                text.textContent =
                    message;

            }

        }

        function setMapReady(){

            if(!status) return;

            setMapStatus(
                "Enterprise network online"
            );

            setTimeout(()=>{

                status.classList.add(
                    "is-ready"
                );

            },720);

        }

    }catch(error){

        console.error(

            "Operational Network map failed:",

            error

        );

        frame.classList.add(
            "is-online"
        );

        if(status){

            status.classList.add(
                "is-error"
            );

            status.classList.remove(
                "is-ready"
            );

        }

        setMapStatus(

            "Map data unavailable — network registry remains accessible"

        );

        updateDetailPanel({

            eyebrow:
                "MAP SYSTEM NOTICE",

            title:
                "Geographic Layer Unavailable",

            location:
                "Operational Network",

            detail:
                "The geographic data could not be loaded. " +
                "Check the browser connection and console, " +
                "then refresh the page."

        });

    }
    }

function sageEaseOutQuint(t) {
    return 1 - Math.pow(1 - t, 5);
}

function sageMetricValueParts(targetText) {
    const raw = String(targetText).trim();
    const numeric = parseInt(raw.replace(/[^\d]/g, ""), 10) || 0;

    return {
        raw,
        numeric,
        prefix: raw.includes("$") ? "$" : "",
        suffix: raw.includes("M") ? "M+" : raw.includes("+") ? "+" : ""
    };
}

function sageWriteMetric(element, parts, value) {
    element.textContent =
        parts.prefix +
        value +
        parts.suffix;
}

function sageCount(element, targetText, duration = 2200) {
    const parts = sageMetricValueParts(targetText);
    const start = performance.now();

    function frame(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = sageEaseOutQuint(progress);
        const value = Math.floor(parts.numeric * eased);

        sageWriteMetric(element, parts, value);

        if (progress < 1) {
            requestAnimationFrame(frame);
        } else {
            element.textContent = parts.raw;
        }
    }

    requestAnimationFrame(frame);
}

function sageCountByTens(element, targetText, interval = 180) {
    const parts = sageMetricValueParts(targetText);

    if (parts.numeric <= 0) {
        element.textContent = parts.raw;
        return;
    }

    let current = 0;
    sageWriteMetric(element, parts, 0);

    function tick() {
        current = Math.min(current + 10, parts.numeric);
        sageWriteMetric(element, parts, current);

        if (current < parts.numeric) {
            window.setTimeout(tick, interval);
        } else {
            element.textContent = parts.raw;
        }
    }

    window.setTimeout(tick, interval);
}

function sageCountTransitions(element, targetText, interval = 560) {
    const parts = sageMetricValueParts(targetText);

    if (parts.numeric <= 0) {
        element.textContent = parts.raw;
        return;
    }

    let current = 0;
    element.textContent = "0";

    function tick() {
        current += 1;
        element.textContent = String(current);

        if (current < parts.numeric) {
            window.setTimeout(tick, interval);
        } else {
            element.textContent = parts.raw;
        }
    }

    window.setTimeout(tick, interval);
}

function sageResolveLifetimeZero(element) {
    element.textContent = "0";

    if (
        typeof element.animate !== "function" ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
        return;
    }

    element.animate(
        [
            {
                opacity: 0.48,
                transform: "scale(.96)",
                filter: "blur(.7px)"
            },
            {
                opacity: 1,
                transform: "scale(1.035)",
                filter: "blur(0)",
                offset: 0.48
            },
            {
                opacity: 1,
                transform: "scale(1)",
                filter: "blur(0)"
            }
        ],
        {
            duration: 760,
            easing: "cubic-bezier(.22,1,.36,1)",
            fill: "both"
        }
    );
}

function initializeExecutiveDashboard() {
    const section =
        document.querySelector(".operational-scope") ||
        document.querySelector(".sage-record");

    if (!section) return;

    const numbers = [
        ...section.querySelectorAll(".scope-number")
    ];

    if (!numbers.length) return;

    numbers.forEach(number => {
        number.dataset.target =
            number.dataset.target ||
            number.textContent.trim();

        number.textContent = "0";
    });

    let played = false;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting || played) return;

            played = true;

            const metrics = numbers.map((element, index) => {
                const target = element.dataset.target;
                const parts = sageMetricValueParts(target);

                return {
                    element,
                    index,
                    target,
                    numeric: parts.numeric,
                    isMoney:
                        target.includes("$") ||
                        target.includes("M"),
                    hasPlus:
                        target.includes("+")
                };
            });

            const assets = metrics.find(metric =>
                metric.isMoney
            );

            const workstreams = metrics.find(metric =>
                !metric.isMoney &&
                metric.hasPlus &&
                metric.numeric >= 20
            );

            const transitions = metrics.find(metric =>
                !metric.isMoney &&
                metric.numeric === 4
            );

            const zones = metrics.find(metric =>
                !metric.isMoney &&
                !metric.hasPlus &&
                metric.numeric === 13
            );

            const zeroMetrics = metrics.filter(metric =>
                metric.numeric === 0
            );

            const handled = new Set(
                [
                    assets,
                    workstreams,
                    transitions,
                    zones,
                    ...zeroMetrics
                ].filter(Boolean)
            );

            if (zones) {
                window.setTimeout(() => {
                    sageCount(
                        zones.element,
                        zones.target,
                        1750
                    );
                }, 80);
            }

            if (workstreams) {
                window.setTimeout(() => {
                    sageCountByTens(
                        workstreams.element,
                        workstreams.target,
                        180
                    );
                }, 180);
            }

            if (transitions) {
                window.setTimeout(() => {
                    sageCountTransitions(
                        transitions.element,
                        transitions.target,
                        560
                    );
                }, 360);
            }

            zeroMetrics.forEach((metric, index) => {
                window.setTimeout(() => {
                    sageResolveLifetimeZero(
                        metric.element
                    );
                }, 2350 + (index * 180));
            });

            if (assets) {
                window.setTimeout(() => {
                    sageCount(
                        assets.element,
                        assets.target,
                        3600
                    );
                }, 520);
            }

            metrics
                .filter(metric => !handled.has(metric))
                .forEach((metric, index) => {
                    window.setTimeout(() => {
                        sageCount(
                            metric.element,
                            metric.target,
                            1900
                        );
                    }, 180 + (index * 120));
                });

            observer.disconnect();
        });
    }, {
        threshold: .28
    });

    observer.observe(section);
}

function initializeLeadershipTenure() {
    const section = document.querySelector(".sage-tenure");
    if (!section) return;

    const number = section.querySelector(".tenure-number");
    const mark = section.querySelector(".sage-tenure__mark");
    const sourceEnergy = document.querySelector(".sage-energy");
    const handoff = section.querySelector(".sage-tenure__handoff");
    const handoffNode = section.querySelector(".sage-tenure__handoff-node");
    const journey = document.querySelector(".sage-journey2");

    let played = false;

    function transferOrbToTimelineOrigin() {
        if (!sourceEnergy || !handoff || !handoffNode) return;

        const sourceRect = sourceEnergy.getBoundingClientRect();
        const targetRect = handoffNode.getBoundingClientRect();

        const orb = document.createElement("span");
        orb.className = "sage-tenure-transfer-orb";

        const startX = sourceRect.left + sourceRect.width / 2 + window.scrollX;
        const startY = sourceRect.top + sourceRect.height / 2 + window.scrollY;
        const endX = targetRect.left + targetRect.width / 2 + window.scrollX;
        const endY = targetRect.top + targetRect.height / 2 + window.scrollY;

        orb.style.left = `${startX - 5}px`;
        orb.style.top = `${startY - 5}px`;

        document.body.appendChild(orb);
        sourceEnergy.style.opacity = "0";

        const dx = endX - startX;
        const dy = endY - startY;

        const flight = orb.animate(
            [
                {
                    transform: "translate3d(0,0,0) scale(.86)",
                    opacity: .92
                },
                {
                    transform: `translate3d(${dx * .18}px,${dy * .18}px,0) scale(1.10)`,
                    opacity: 1,
                    offset: .22
                },
                {
                    transform: `translate3d(${dx * .72}px,${dy * .72}px,0) scale(.98)`,
                    opacity: 1,
                    offset: .76
                },
                {
                    transform: `translate3d(${dx}px,${dy}px,0) scale(.76)`,
                    opacity: 1
                }
            ],
            {
                duration: 1750,
                easing: "cubic-bezier(.22,.72,.24,1)",
                fill: "forwards"
            }
        );

        flight.finished.then(() => {
            handoff.classList.add("is-arrived");
            journey?.classList.add("has-tenure-handoff");

            window.setTimeout(() => {
                orb.remove();
            }, 120);
        }).catch(() => {
            orb.remove();
        });
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting || played) return;

            played = true;

            let sourceFlight;

            if (sourceEnergy) {
                sourceFlight = sourceEnergy.animate(
                    [
                        {
                            transform: "translate(-50%, -190px) scale(.75)",
                            opacity: .2
                        },
                        {
                            transform: "translate(-50%, 0) scale(1)",
                            opacity: 1
                        }
                    ],
                    {
                        duration: 1500,
                        easing: "cubic-bezier(.22,.8,.24,1)",
                        fill: "forwards"
                    }
                );
            }

            mark.animate(
                [
                    {
                        opacity: .28,
                        filter: "blur(5px)",
                        transform: "scale(.96)"
                    },
                    {
                        opacity: 1,
                        filter: "blur(0)",
                        transform: "scale(1)"
                    }
                ],
                {
                    duration: 900,
                    delay: 850,
                    easing: "cubic-bezier(.22,1,.36,1)",
                    fill: "both"
                }
            );

            setTimeout(() => sageCount(number, "15", 2900), 900);

            if (sourceFlight) {
                sourceFlight.finished
                    .then(() => {
                        window.setTimeout(transferOrbToTimelineOrigin, 120);
                    })
                    .catch(() => {});
            } else {
                window.setTimeout(transferOrbToTimelineOrigin, 1550);
            }

            observer.disconnect();
        });
    }, { threshold: .38 });

    observer.observe(section);
}

function initializeMissionTimeline() {
    const journey = document.querySelector(".sage-journey2");
    if (!journey) return;

    const system = journey.querySelector(".sage-journey2__system");
    const railFill = journey.querySelector(".sage-journey2__rail-fill");
    const energy = journey.querySelector(".sage-journey2__energy");
    const history = [...journey.querySelectorAll("button.sage-journey2__mission")];
    const future = journey.querySelector(".sage-journey2__mission--05");

    if (!system || !railFill || !energy || history.length !== 4 || !future) return;

    function centerY(el) {
        return el.offsetTop + (el.offsetHeight / 2);
    }

    function setEnergy(y, duration = 760) {
        energy.style.transition =
            `top ${duration}ms cubic-bezier(.22,.8,.24,1), opacity 180ms ease`;
        energy.style.top = `${y}px`;
        railFill.style.height = `${y}px`;
    }

    let sequencePlayed = false;

    const sequenceObserver = new IntersectionObserver(entries => {
        for (const entry of entries) {
            if (!entry.isIntersecting || sequencePlayed) continue;

            sequencePlayed = true;
            journey.classList.add("is-running");

            let delay = 220;

            history.forEach((mission, index) => {
                const travel = index === 0 ? 620 : 760;

                window.setTimeout(() => {
                    setEnergy(centerY(mission), travel);
                }, delay);

                window.setTimeout(() => {
                    mission.classList.add("is-online");
                }, delay + travel - 120);

                delay += travel + 300;
            });

            sequenceObserver.disconnect();
        }
    }, {
        threshold: .52,
        rootMargin: "0px 0px -12% 0px"
    });

    sequenceObserver.observe(history[0]);

    history.forEach(mission => {
        mission.addEventListener("click", () => {
            const targetId = mission.dataset.dossierTarget;
            const dossier = targetId ? document.getElementById(targetId) : null;
            if (!dossier) return;

            if (typeof window.sageOpenOperatingArchive === "function") {
                window.sageOpenOperatingArchive(targetId);
                return;
            }

            dossier.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            window.setTimeout(() => {
                dossier.focus({ preventScroll: true });
            }, 700);
        });
    });

    let futurePlayed = false;

    const futureObserver = new IntersectionObserver(entries => {
        for (const entry of entries) {
            if (!entry.isIntersecting || futurePlayed) continue;

            futurePlayed = true;
            const y = centerY(future);

            window.setTimeout(() => {
                setEnergy(y, 900);
            }, 180);

            window.setTimeout(() => {
                future.classList.add("is-awake");
            }, 930);

            futureObserver.disconnect();
        }
    }, { threshold: .46 });

    futureObserver.observe(future);
}

function initializeOperatingArchive(){
    const archive=document.querySelector(".oa-archive"); if(!archive)return;
    const buttons=[...archive.querySelectorAll(".oa-index__item")];
    const records=[...archive.querySelectorAll(".oa-record")];
    const stages=[...archive.querySelectorAll(".oa-model__stages span")];
    const line=archive.querySelector(".oa-model__line span");
    const status=archive.querySelector(".oa-model__status strong");

    let discoveryPlayed=false;
    const discoveryObserver=new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
            if(!entry.isIntersecting || discoveryPlayed)return;
            discoveryPlayed=true;
            buttons.forEach((button,index)=>{
                window.setTimeout(()=>{
                    button.classList.add("is-discovering");
                    window.setTimeout(()=>button.classList.remove("is-discovering"),360);
                },index*300);
            });
            discoveryObserver.disconnect();
        });
    },{threshold:.34});

    discoveryObserver.observe(archive);

    function activate(targetId,options={}){
        const record=document.getElementById(targetId);
        if(!record||!archive.contains(record))return;
        const stage=Number(record.dataset.oaStage||1);
        records.forEach(item=>{const active=item===record;item.classList.toggle("is-active",active);item.setAttribute("aria-hidden",active?"false":"true")});
        buttons.forEach(button=>{
            const active=button.dataset.oaTarget===targetId;
            button.classList.toggle("is-active",active);
            button.setAttribute("aria-selected",active?"true":"false");
            const cue=button.querySelector(".oa-cue-active");
            if(cue)cue.textContent=active?`ACTIVE // ${String(stage).padStart(2,"0")}`:"ACTIVE";
        });
        stages.forEach((item,index)=>item.classList.toggle("is-active",index<stage));
        if(line)line.style.width=`${[0,33.333,66.666,100][stage-1]}%`;
        if(status)status.textContent=`${String(stage).padStart(2,"0")} OF 04`;
        archive.classList.toggle("is-complete",stage===4);
        if(options.scroll!==false)archive.scrollIntoView({behavior:"smooth",block:"start"});
        if(options.focus===true)window.setTimeout(()=>record.focus({preventScroll:true}),650);
    }

    buttons.forEach(button=>button.addEventListener("click",()=>activate(button.dataset.oaTarget,{scroll:false})));
    archive.querySelectorAll(".oa-next").forEach(button=>button.addEventListener("click",()=>{
        activate(button.dataset.oaNext,{scroll:false});
        archive.querySelector(".oa-canvas")?.scrollIntoView({behavior:"smooth",block:"start"});
    }));
    window.sageOpenOperatingArchive=targetId=>activate(targetId,{scroll:true,focus:true});
    activate("oe-mission-01",{scroll:false});
}

