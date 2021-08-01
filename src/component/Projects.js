import React, { useState } from "react";
import Project from "./Project";

const Projects = () => {
	const [projects, setProjects] = useState([
		{
			title: "Magic: The Gathering Collection and Card Manager",
			desc: "This is a Full-Stack project using React, Node, MongoDB, and Express. You can view all cards from the Magic: The Gathering Game, as well as build your collection and create custom deck lists.",
		},
		{
			title: "Life Counter Application",
			desc: "A life counter compainion app for Magic: The Gathering Collectable Card Game.",
		},
	]);
	const proList = projects.map((p) => {
		return <Project title={p.title} desc={p.desc} />;
	});
	return (
		<div className="projects">
			<div className="projects__title">
				<h3 className="projects__title-h3">Projects</h3>
			</div>
			{proList}
		</div>
	);
};

export default Projects;
