package com.yedam;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

interface Controller {
	public void exe();
}

class Sample implements Controller {
	public void exe() {
		System.out.println("Sample 클래스");
	}
}

public class Main {
	public static void main(String[] args) {
		
		ArrayList<Book> list = new ArrayList<Book>();
		Book book = list.getFirst();
		
		Map<String, Integer> map = new HashMap<String, Integer>();
		
		map.put("홍길동", 80);
		map.put("김길동", 87);
		
		
		Integer result = map.get("홍길동");
		System.out.println(result);
	
		
		Map<String, Controller> controls = new HashMap<>();
		
		
		controls.put("Sample", new Sample()); // (데이터, controller의 실행 코드 -> exe)
		controls.put("Test", new Controller() {
			@Override
			public void exe() {
				System.out.println("test 입니다");
			}
		});
		
		Controller val = controls.get("Sample");
		val.exe();
		
		
	}
}
