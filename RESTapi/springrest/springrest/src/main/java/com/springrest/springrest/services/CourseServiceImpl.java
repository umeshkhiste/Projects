package com.springrest.springrest.services;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.springrest.Entities.Course;
import com.springrest.springrest.dao.CourseDao;

@Service
public class CourseServiceImpl implements CourseService {

	@Autowired
	private CourseDao courseDao;
	
	//List<Course> list;
	
	public CourseServiceImpl() {
//		list = new ArrayList<>();
//		list.add(new Course(147,"Spring boot Course", " This is a RESTapi practical"));
//		list.add(new Course(150,"Advance Java Course","Advance Java Course"));
		
	}
		
	@Override
	public List<Course> getCourses() {
		return courseDao.findAll();
	}

	@Override
	public Course getCourse(long courseId) {
//		Course c = null;
//		for(Course course:list)
//		{
//			if(course.getId()==courseId)
//			{
//				c = course;
//				break;
//			}
//		}
		return courseDao.getOne(courseId);
	}

	@Override
	public Course addCourse(Course course) {
		//list.add(course);
		courseDao.save(course);
		return course;
	}

	@Override
	public Course updateCourse(Course course) {
//		list.forEach(e ->{
//			if(e.getId() == course.getId()) {
//				e.setTitle(course.getTitle());
//				e.setDescription(course.getDescription());
//			}
//		});
		courseDao.save(course);
		return course;
	}

	@Override
	public void deleteCourse(long parseLong) {
		//list = this.list.stream().filter(e ->e.getId()!=parseLong).collect(Collectors.toList());
		Course entity = courseDao.getOne(parseLong);
		courseDao.delete(entity);
	}
	
	

}
